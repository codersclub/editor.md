(function(){
    var factory = function (exports) {
        var lang = {
            name : "ru",
            description : "Простой онлайн редактор markdown.",
            toolbar : {
                undo             : "Undo(Ctrl+Z)",
                redo             : "Redo(Ctrl+Y)",
                bold             : "Жирный",
                del              : "Зачёркнутый",
                italic           : "Наклонный",
                quote            : "Цитата",
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
                anchor           : "Якорь",
                image            : "Картинка",
                code             : "Код",
                "preformatted-text" : "Форматированный текст / Блок кода (Отступ = Tab)",
                "code-block"     : "Блок кода с указанием языка",
                table            : "Таблицы",
                datetime         : "Дата/Время",
                emoji            : "Эиодзи",
                htmlEntities     : "Спец. символы",
                watch            : "Unwatch",
                unwatch          : "Watch",
                preview          : "Предпросмотр (ESC для выхода)",
                fullscreen       : "Полноэкранный режим (ESC для выхода)",
                clear            : "Очистка",
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
                anchor : {
                    title    : "Ссылка на якорь",
                    name     : "Название",
                    url      : "URL",
                    urlTitle : "Заголовок",
                    nameEmpty: "Ошибка: якорь не должен быть пустым.",
                    titleEmpty : "Ошибка: якорь должен биметь название.",
                    urlEmpty : "Ошибка: якорь должен иметь ссылку (URL).",
                },
                image : {
                    title    : "Картинка",
                    url      : "Address",
                    link     : "Link",
                    alt      : "Title",
                    uploadButton     : "Загрузить",
                    imageURLEmpty    : "Error: picture url address can't be empty.",
                    uploadFileEmpty  : "Error: upload pictures cannot be empty!",
                    formatNotAllowed : "Error: only allows to upload pictures file, upload allowed image file format:"
                },
                preformattedText : {
                    title             : "Форматированный текст / Блок кода", 
                    emptyAlert        : "Error: Please fill in the Preformatted text or content of the codes."
                },
                codeBlock : {
                    title             : "Блок кода с указанием языка",
                    selectLabel       : "Язык: ",
                    selectDefaultText : "Выберите нужный язык...",
                    otherLanguage     : "Other languages",
                    unselectedLanguageAlert : "Error: Please select the code language.",
                    codeEmptyAlert    : "Error: Please fill in the code content."
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