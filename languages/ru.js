(function(){
    var factory = function (exports) {
        var lang = {
            name : "ru",
            description : "Простой онлайн редактор markdown.",
            tocTitle    : "Содержание",
            toolbar : {
                undo             : "Отмена(Ctrl+Z)",
                redo             : "Повтор(Ctrl+Y)",
                bold             : "Жирный",
                del              : "Зачёркнутый",
                italic           : "Наклонный",
                quote            : "Цитата",
                ucwords          : "Первый буква слова заглавная",
                uppercase        : "Текст ЗАГЛАВНЫМИ буквами",
                lowercase        : "Текст строчными буквами",
                h1               : "Заголовок 1",
                h2               : "Заголовок 2",
                h3               : "Заголовок 3",
                h4               : "Заголовок 4",
                h5               : "Заголовок 5",
                h6               : "Заголовок 6",
                "list-ul"        : "Ненумерованный список",
                "list-ol"        : "Нумерованный список",
                hr               : "Разделитель",
                link             : "Ссылка",
                "reference-link" : "Адрес ссылки",
                image            : "Картинка",
                code             : "Код",
                "preformatted-text" : "Форматированный текст / Блок кода (Отступ = Tab)",
                "code-block"     : "Блок кода с указанием языка",
                table            : "Таблицы",
                datetime         : "Дата/Время",
                emoji            : "Эмодзи",
                "html-entities"  : "Спец. символы",
                pagebreak        : "Разрыв страницы",
                watch            : "НЕ следить",
                unwatch          : "Следить",
                preview          : "Предпросмотр (ESC для выхода)",
                fullscreen       : "Полноэкранный режим (ESC для выхода)",
                clear            : "Очистка",
                search           : "Поиск",
                help             : "Помощь",
                info             : "О программе " + exports.title
            },
            buttons : {
                enter  : "Enter",
                cancel : "Отмена",
                close  : "Закрыть"
            },
            dialog : {
                link : {
                    title    : "Название",
                    url      : "URL",
                    urlTitle : "Заголовок",
                    urlEmpty : "Ошибка: Пожалуйста, укажите URL для ссылки."
                },
                referenceLink : {
                    title    : "Ссылка",
                    name     : "Название",
                    url      : "URL",
                    urlId    : "ID",
                    urlTitle : "Заголовок",
                    nameEmpty: "Ошибка: Название ссылки не должно быть пустым.",
                    idEmpty  : "Ошибка: ID ссылки не должно быть пустым.",
                    urlEmpty : "Ошибка: URL не должен быть пустым.",
                },
                image : {
                    title    : "Картинка",
                    url      : "URL",
                    link     : "Ссылка",
                    alt      : "Альтернативный текст",
                    uploadButton     : "Загрузить",
                    imageURLEmpty    : "Ошибка: URL картинки не должен быть пустым.",
                    uploadFileEmpty  : "Ошибка: Необходимо указать загружаемую картинку!",
                    formatNotAllowed : "Ошибка: разрешена загрузка картинок только следующих форматов:"
                },
                preformattedText : {
                    title             : "Форматированный текст / Блок кода", 
                    emptyAlert        : "Ошибка: Нужно ввести форматированный текст или блок кода.",
                    placeholder       : "текст с форматированием...."
                },
                codeBlock : {
                    title             : "Блок кода с указанием языка",
                    selectLabel       : "Язык: ",
                    selectDefaultText : "Выберите нужный язык...",
                    otherLanguage     : "Прочие языки",
                    unselectedLanguageAlert : "Ошибка: Необходимо указать язык кода.",
                    codeEmptyAlert    : "Ошибка: Необходимо ввести собственно код.",
                    placeholder       : "Вводите код...."
                },
                htmlEntities : {
                    title : "Спец. символы"
                },
                help : {
                    title : "Помощь"
                }
            }
        };
        
        exports.defaults.lang = lang;
    };
    
	// CommonJS/Node.js
	if (typeof require === "function" && typeof exports === "object" && typeof module === "object")
    { 
        module.exports = factory;
    }
	else if (typeof define === "function")  // AMD/CMD/Sea.js
    {
		if (define.amd) { // for Require.js

			define(["editormd"], function(editormd) {
                factory(editormd);
            });

		} else { // for Sea.js
			define(function(require) {
                var editormd = require("../editormd");
                factory(editormd);
            });
		}
	} 
	else
	{
        factory(window.editormd);
	}
    
})();