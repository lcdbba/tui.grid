tui.util.defineNamespace("fedoc.content", {});
fedoc.content["view_layout_toolbar.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview 툴바영역 클래스\n * @author NHN Ent. FE Development Team\n */\n'use strict';\n\nvar View = require('../../base/view');\n\n/**\n * 툴바 영역\n * @module view/layout/toolbar\n * @extends module:base/view\n */\nvar Toolbar = View.extend(/**@lends module:view/layout/toolbar.prototype */{\n    /**\n     * @constructs\n     * @param {Object} options - Options\n     */\n    initialize: function(options) {\n        View.prototype.initialize.call(this);\n\n        this.toolbarModel = options.toolbarModel;\n        this.dimensionModel = options.dimensionModel;\n        this.viewFactory = options.viewFactory;\n    },\n\n    tagName: 'div',\n\n    className: 'toolbar',\n\n    /**\n     * 랜더링한다.\n     * @returns {View.Layout.Toolbar} this object\n     */\n    render: function() {\n        var toolbarModel = this.toolbarModel;\n\n        this._destroyChildren();\n\n        if (toolbarModel.get('hasControlPanel')) {\n            this._addChildren(this.viewFactory.createToolbarControlPanel());\n        }\n\n        if (toolbarModel.get('hasResizeHandler')) {\n            this._addChildren(this.viewFactory.createToolbarResizeHandler());\n        }\n\n        if (toolbarModel.get('hasPagination')) {\n            this._addChildren(this.viewFactory.createToolbarPagination());\n        }\n\n        this.$el.empty().append(this._renderChildren());\n        this._refreshHeight();\n\n        return this;\n    },\n\n    /**\n     * Reset toolbar-height based on the model/dimension->toolbarHeight.\n     */\n    _refreshHeight: function() {\n        var height = this.dimensionModel.get('toolbarHeight');\n\n        this.$el.height(height);\n        this.$el.toggle(!!height);\n    }\n});\n\nmodule.exports = Toolbar;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"