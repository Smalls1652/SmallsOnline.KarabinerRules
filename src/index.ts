import {
  writeToProfile,
} from "karabiner.ts";

// Import rules for all web browsers.
import {
  AllWebBrowsers
} from "./rules/apps/AllWebBrowsers";

// Write rules to "Default profile".
writeToProfile("Default profile", [
  AllWebBrowsers.browserScrollToTopRule,
  AllWebBrowsers.browserScrollToBottomRule,
]);
