import ReactGA from 'react-ga';

const isProduction = process.env.NODE_ENV === 'production';
const empty = () => null;

function initializeGa() {
  try {
    ReactGA.initialize('UA-73277256-1', { debug: !isProduction });
  } catch (err) {
    empty(err);
  }
}

initializeGa();

export function trackPageView(location) {
  try {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(location);
  } catch (err) {
    empty(err);
  }
}

export function trackEvent({ category, action, label, value }) {
  try {
    ReactGA.event({ category, action, label, value });
  } catch (err) {
    empty(err);
  }
}

export function trackError(description, fatal = true) {
  try {
    ReactGA.exception({
      description,
      fatal,
    });
  } catch (err) {
    empty(err);
  }
}

export class GaTiming {
  constructor({ category, variable }) {
    this.state = {
      start: 0,
      end: 0,
      category,
      variable,
    };
  }


  startTiming() {
    this.state.start = Date.now();
  }

  endTiming() {
    this.state.end = Date.now();
  }

  sendTiming(label) {
    const { start, end } = this.state;

    if (start > 0 && end > 0) {
      try {
        const diff = end - start;
        ReactGA.timing({
          ...this.state,
          value: diff,
          label,
        });

        this.state.start = 0;
        this.state.end = 0;
      } catch (err) {
        empty(err);
      }
    }
  }
}
