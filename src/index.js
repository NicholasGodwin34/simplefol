import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { initCardStack } from "./scripts/cardstack";   

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initCardStack();
