/**
 * @fileoverview Rule to flag block statements that do not use the one true brace style
 * @author Ian Christian Myers
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    function checkBlockStatement(node) {
        var tokens = context.getTokens(node, 1),
            parent = context.getAncestors().pop();

        if (tokens[0].loc.start.line !== tokens[1].loc.start.line) {
            context.report(parent, "Opening curly brace does not appear on the same line as the block identifier.");
        }
    }

    function checkSwitchStatement(node) {
        var tokens = context.getTokens(node.cases[0], 2);

        if (tokens[0].loc.start.line !== tokens[1].loc.start.line) {
            context.report(node, "Opening curly brace does not appear on the same line as the block identifier.");
        }
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "BlockStatement": checkBlockStatement,
        "SwitchStatement": checkSwitchStatement
    };

};
