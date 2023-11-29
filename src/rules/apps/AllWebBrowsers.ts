import {
    ConditionBuilder,
    Rule,
    ifApp,
    map,
    rule,
    withCondition,
    withModifier
} from "karabiner.ts";

/**
 * A collection of rules that apply to all web browsers.
 */
export class AllWebBrowsers {
    private static _ifWebBrowser: ConditionBuilder = ifApp([
        "org.mozilla.firefox",
        "com.microsoft.edgemac",
        "com.google.Chrome",
        "org.chromium.Chromium",
    ]);

    /**
     * Scroll to the top of the page in a web browser using
     * the same keyboard shortcut that Safari uses. (Shift + ⌘ + ↑)
     * 
     * @remarks
     * This rule only applies to the following web browsers:
     * - Mozilla Firefox
     * - Microsoft Edge
     * - Google Chrome
     * - Chromium
     */
    public static browserScrollToTopRule: Rule = rule("WebBrowserScrollToTop")
        .description("Web browsers: Scroll to the top of the page - (Shift + ⌘ + ↑)")
        .manipulators([
            withCondition(this._ifWebBrowser)([
                withModifier(["shift", "⌘"])(
                    map("↑").to("home").build()
                )
            ])
        ])
        .build();
    
    /**
     * Scroll to the bottom of the page in a web browser using
     * the same keyboard shortcut that Safari uses. (Shift + ⌘ + ↓)
     * 
     * @remarks
     * This rule only applies to the following web browsers:
     * - Mozilla Firefox
     * - Microsoft Edge
     * - Google Chrome
     * - Chromium
    */
    public static browserScrollToBottomRule: Rule = rule("WebBrowserScrollToBottom")
        .description("Web browsers: Scroll to the bottom of the page - (Shift + ⌘ + ↓)")
        .manipulators([
            withCondition(this._ifWebBrowser)([
                withModifier(["shift", "⌘"])(
                    map("↓").to("end").build()
                )
            ])
        ])
        .build();
}