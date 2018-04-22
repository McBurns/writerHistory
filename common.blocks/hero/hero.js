/**@module Hero*/
modules.define ('hero', ['i-bem'],
    // функция, в которую передаются имена используемых модулей
    function(provide, BEM) {

        // декларация блока hello
        provide(BEM.declBlock('hero', {

                _name: undefined,

                onSetMod: {
                    js: {
                        inited: function() {
                            this.init ();
                        }
                    }
                },
                init: function () {
                    this._name = '';
                },

                getName: function () {
                    return this._name;
                }
            },
            {

            }));
    });