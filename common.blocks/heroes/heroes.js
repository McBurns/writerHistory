/**@module Heroes*/
modules.define ('heroes', ['i-bem', 'hero'],
    // функция, в которую передаются имена используемых модулей
    function (provide, BEM, Hero) {

        // декларация блока hello
        provide (BEM.declBlock ('heroes', {

                _heroes: undefined,

                onSetMod: {
                    js: {
                        inited: function () {
                            this.init ();
                        }
                    }
                },

                init: function () {
                    this._heroes = [new Hero ()];
                },

                getHeroesList: function () {
                    let list;
                    let hero;

                    list = [];
                    for (hero of this._heroes) {
                        list.push (hero.getName ());
                    }

                    return list;
                }
            },
            {}));
    });