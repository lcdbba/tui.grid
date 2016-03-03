ne.util.defineNamespace("fedoc.content", {});
fedoc.content["view_layer_loading.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Loading layer class\n * @author NHN Ent. FE Development Team\n */\n'use strict';\n\nvar Layer = require('../layer');\n\n/**\n * Class for the layer which shows a loading indicator\n * @module view/layer/loading\n */\nvar Loading = Layer.extend(/**@lends module:view/layer/loading.prototype */{\n    /**\n     * @constructs\n     * @extends module:view/layer\n     */\n    initialize: function() {\n        Layer.prototype.initialize.apply(this, arguments);\n        this.text = '요청을 처리 중입니다.';\n    },\n\n    className: 'loading_layer',\n\n    template: _.template('' +\n        '&lt;div>' +\n        '    &lt;%=text%>' +\n        '    &lt;div class=\"loading_img\">&lt;/div>' +\n        '&lt;/div>')\n});\n\nmodule.exports = Loading;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"