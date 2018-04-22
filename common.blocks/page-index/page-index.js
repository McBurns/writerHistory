/**@module PageIndex*/
modules.define ('page-index', ['i-bem-dom', 'heroes'],
    // функция, в которую передаются имена используемых модулей
    function (provide, bemDom, Heroes) {

        // декларация блока hello
        provide (bemDom.declBlock ('page-index', {

                _locations: undefined,

                onSetMod: {
                    js: {
                        inited: function () {
                            this.init ();
                        }
                    }
                },
                init: function () {
                    this._heroes = new Heroes ();
                    this._locations = [this._getDefaultLocationStructure ()];
                    let test = this._heroes.getHeroesList ();
                    debugger;
                },

                _getDefaultLocationStructure: function () {
                    return {
                        name: ''
                    }
                }
            },
            {}));
    });