module.exports = function(grunt) {

    var targetName = "WinJSGruntTest";
    var buildDate = new Date();
    var month = buildDate.getMonth() + 1;
    var buildDateString = buildDate.getFullYear() + "." + month + "." + buildDate.getDate();
    var localeFolder = "en-US";

    var baseJSFiles = [
        "src/js/build/Copyright.js",
        "src/js/build/startbase.js",
        "src/js/base/references.js",
        "src/js/base/base.js",
        "src/js/base/baseutils.js",
        "src/js/base/log.js",
        "src/js/base/events.js",
        "src/js/base/resources.js",
        "src/js/base/promise.js",
        "src/js/base/scheduler.js",
        "src/js/base/errors.js",
        "src/js/base/xhr.js",
        "src/js/base/safehtml.js",
        "src/js/base/getwinjsstring.js",
        "src/js/base/dispose.js",

        "src/js/ui/control.js",
        "src/js/ui/declarativecontrols.js",
        "src/js/ui/elementlistutilities.js",
        "src/js/ui/elementutilities.js",
        "src/js/ui/fragmentcontrol.js",
        "src/js/ui/fragmentloader.js",
        "src/js/ui/optionslexer.js",
        "src/js/ui/optionsparser.js",
        "src/js/ui/tabmanager.js",
        "src/js/ui/transitionanimation.js",
        "src/js/ui/utilities.js",

        "src/js/wwa-app/application.js",
        "src/js/wwa-app/navigation2.js",
        "src/js/wwa-app/state.js",

        "src/js/binding/bindingparser.js",
        "src/js/binding/data.js",
        "src/js/binding/datatemplate.js",
        "src/js/binding/declarative.js",
        "src/js/binding/domweakreftable.js",
        "src/js/binding/list.js",
        "src/js/binding/datatemplatecompiler.js",

        "src/js/res/res.js",

        "src/js/build/endbase.js"
    ];

    var baseJSFilesPhone = [
        "src/js/startBase.js",
        "src/js/base/references.js",
        "src/js/base/base.js",
        "src/js/base/baseUtils.js",
        "src/js/base/baseUtils-phone.js",
        "src/js/base/log.js",
        "src/js/base/events.js",
        "src/js/base/resources.js",
        "src/js/base/promise.js",
        "src/js/base/scheduler.js",
        "src/js/base/errors.js",
        "src/js/base/xhr.js",
        "src/js/base/safeHTML.js",
        "src/js/base/getWintsString.js",
        "src/js/base/dispose.js",

        "src/js/ui/control.js",
        "src/js/ui/declarativeControls.js",
        "src/js/ui/elementListUtilities.js",
        "src/js/ui/elementUtilities.js",
        "src/js/ui/fragmentControl.js",
        "src/js/ui/fragmentLoader.js",
        "src/js/ui/optionsLexer.js",
        "src/js/ui/optionsParser.js",
        "src/js/ui/tabManager.js",
        "src/js/ui/transitionAnimation.js",
        "src/js/ui/utilities.js",

        "src/js/wwa-app/application.js",
        "src/js/wwa-app/navigation2.js",
        "src/js/wwa-app/state.js",

        "src/js/binding/bindingParser.js",
        "src/js/binding/data.js",
        "src/js/binding/dataTemplate.js",
        "src/js/binding/declarative.js",
        "src/js/binding/DOMWeakRefTable.js",
        "src/js/binding/list.js",
        "src/js/binding/dataTemplateCompiler.js",

        "src/js/res/Res.js",

        "src/js/endBase.js"
    ];

    var baseStringsFiles = [
        "src/js/build/Copyright.js",
        "src/js/library/stringsHeader.js",
        "src/js/library/stringsBlockHeader.js",
        "src/js/" + localeFolder + "/base.prefix.js",
        "src/js/" + localeFolder + "/base.resjson",
        "src/js/library/stringsBlockFooter.js",
        "src/js/library/stringsFooter.js"
    ];

    var uiJSFiles = [
        "src/js/build/Copyright.js",
        "src/js/build/startUI.js",
        "src/js/animations/animations.js",
        "src/js/uicollections/Assert.js",
        "src/js/uicollections/ItemsManager/BindingListDataSource.js",
        "src/js/uicollections/ItemsManager/ListDataSource.js",
        "src/js/uicollections/ItemsManager/GroupDataSource.js",
        "src/js/uicollections/ItemsManager/GroupedItemDataSource.js",
        "src/js/uicollections/ItemsManager/StorageDataSource.js",
        "src/js/uicollections/ItemsManager/ItemsManager.js",
        "src/js/uicollections/ItemsManager/ParallelWorkQueue.js",
        "src/js/uicollections/ItemsManager/VersionManager.js",
        "src/js/uicollections/Flipper/Flipper.js",
        "src/js/uicollections/Flipper/FlipperPageManager.js",
        "src/js/uicollections/ListView/BrowseMode.js",
        "src/js/uicollections/ListView/Constants.js",
        "src/js/uicollections/ListView/ErrorMessages.js",
        "src/js/uicollections/ListView/GroupFocusCache.js",
        "src/js/uicollections/ListView/GroupsContainer.js",
        "src/js/uicollections/ListView/ItemEventsHandler.js",
        "src/js/uicollections/ListView/ItemsContainer.js",
        "src/js/uicollections/ListView/Layouts2.js",
        "src/js/uicollections/ListView/ListViewImpl.js",
        "src/js/uicollections/Repeater/Repeater.js",
        "src/js/uicollections/ListView/SelectionManager.js",
        "src/js/uicollections/ListView/VirtualizeContentsView.js",
        "src/js/controls/DatePicker/datePicker.js",
        "src/js/controls/TimePicker/timePicker.js",
        "src/js/controls/Select/select.js",
        "src/js/controls/BackButton/backButton.js",
        "src/js/controls/Rating/rating.js",
        "src/js/controls/Toggle/Toggle.js",
        "src/js/controls/SemanticZoom/SemanticZoom.js",
        "src/js/controls/Hub/hub.js",
        "src/js/controls/Hub/hubSection.js",
        "src/js/controls/AppBar/Overlay.js",
        "src/js/controls/AppBar/AppBarIcon.js",
        "src/js/controls/AppBar/AppBarCommand.js",
        "src/js/controls/AppBar/AppBar.js",
        "src/js/controls/AppBar/Flyout.js",
        "src/js/controls/AppBar/Menu.js",
        "src/js/controls/AppBar/MenuCommand.js",
        "src/js/controls/SearchBox/searchBox.js",
        "src/js/controls/AppBar/SettingsFlyout.js",
        "src/js/controls/ItemContainer/itemContainer.js",
        "src/js/controls/NavBar/keyboardBehavior.js",
        "src/js/controls/NavBar/navBar.js",
        "src/js/controls/NavBar/navBarContainer.js",
        "src/js/controls/NavBar/navBarCommand.js",
        "src/js/controls/Tooltip/tooltip.js",
        "src/js/controls/ViewBox/ViewBox.js",
        "src/js/build/endUI.js"
    ];

    var uiJSFilesPhone = [
        "src/js/startUI.js",
        "src/js/uicollections/references.js",
        "src/js/animations/animations.js",
        "src/js/uicollections/Assert.js",
        "src/js/uicollections/ItemsManager/BindingListDataSource.js",
        "src/js/uicollections/ItemsManager/ListDataSource.js",
        "src/js/uicollections/ItemsManager/GroupDataSource.js",
        "src/js/uicollections/ItemsManager/GroupedItemDataSource.js",
        "src/js/uicollections/ItemsManager/StorageDataSource.js",
        "src/js/uicollections/ItemsManager/ItemsManager.js",
        "src/js/uicollections/ItemsManager/ParallelWorkQueue.js",
        "src/js/uicollections/ItemsManager/VersionManager.js",
        "src/js/uicollections/Flipper/Flipper.js",
        "src/js/uicollections/Flipper/FlipperPageManager.js",
        "src/js/uicollections/ListView/BrowseMode.js",
        "src/js/uicollections/ListView/Constants.js",
        "src/js/uicollections/ListView/ErrorMessages.js",
        "src/js/uicollections/ListView/GroupFocusCache.js",
        "src/js/uicollections/ListView/GroupsContainer.js",
        "src/js/uicollections/ListView/ItemEventsHandler.js",
        "src/js/uicollections/ListView/ItemsContainer.js",
        "src/js/uicollections/ListView/Layouts2.js",
        "src/js/uicollections/ListView/ListViewImpl.js",
        "src/js/uicollections/Repeater/Repeater.js",
        "src/js/uicollections/ListView/SelectionManager.js",
        "src/js/uicollections/ListView/VirtualizeContentsView.js",
        "src/js/controls/AppBar/AppBarIcon.js",
        "src/js/controls/AppBar/AppBarCommand-phone.js",
        "src/js/controls/AppBar/AppBar-phone.js",
        "src/js/controls/Pivot/Pivot.js",
        "src/js/controls/Pivot/PivotItem.js",
        "src/js/controls/Toggle/Toggle.js",
        "src/js/controls/ItemContainer/itemContainer.js",
        "src/js/controls/SemanticZoom/SemanticZoom.js",
        "src/js/controls/ViewBox/ViewBox.js",
        "src/js/endUI.js",
    ];

    var uiStringsFiles = [
        "src/js/build/Copyright.js",
        "src/js/library/stringsHeader.js",
        "src/js/library/stringsBlockHeader.js",
        "src/js/" + localeFolder + "/ui.prefix.js",
        "src/js/" + localeFolder + "/ui.resjson",
        "src/js/library/stringsBlockFooter.js",
        "src/js/library/stringsFooter.js"
    ];

    // Project config
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        clean: {
            base: [
                "bin/WinJS.Desktop/js/base.js",
                "bin/WinJS.Desktop/js/" + localeFolder + "/base.strings.js",
                "bin/WinJS.Phone/js/base.js",
                "bin/WinJS.Phone/js/" + localeFolder + "/base.strings.js",
            ],
            ui: [
                "bin/WinJS.Desktop/js/ui.js",
                "bin/WinJS.Desktop/js/" + localeFolder + "/ui.strings.js",
                "bin/WinJS.Phone/js/ui.js",
                "bin/WinJS.Phone/js/" + localeFolder + "/ui.strings.js"
            ],
            css: [
                "bin/WinJS.Desktop/css/ui-dark.css",
                "bin/WinJS.Desktop/css/ui-light.css",
                "bin/WinJS.Phone/css/ui-dark.css",
                "bin/WinJS.Phone/css/ui-light.css"
            ]
        },

        concat: {
            baseDesktop: {
                src: baseJSFiles,
                dest: "bin/WinJS.Desktop/js/base.js"
            },
            basePhone: {
                src: baseJSFilesPhone,
                dest: "bin/WinJS.Phone/js/base.js"
            },
            baseStringsDesktop: {
                src: baseStringsFiles,
                dest: "bin/WinJS.Desktop/js/" + localeFolder + "/base.strings.js"
            },
            baseStringsPhone: {
                src: baseStringsFiles,
                dest: "bin/WinJS.Phone/js/" + localeFolder + "/base.strings.js"
            },
            uiDesktop: {
                src: uiJSFiles,
                dest: "bin/WinJS.Desktop/js/ui.js"
            },
            uiPhone: {
                src: uiJSFilesPhone,
                dest: "bin/WinJS.Phone/js/ui.js"
            },
            uiStringsDesktop: {
                src: uiStringsFiles,
                dest: "bin/WinJS.Desktop/js/" + localeFolder + "/ui.strings.js"
            },
            uiStringsPhone: {
                src: uiStringsFiles,
                dest: "bin/WinJS.Phone/js/" + localeFolder + "/ui.strings.js"
            }
        },

        replace: {
            base: {
                options: {
                    patterns: [
                        {
                            match: /\$\(TARGET_DESTINATION\)/g,
                            replacement: targetName
                        },
                        {
                            match: /\$\(build.version\)/g,
                            replacement: "<%= pkg.version %>"
                        },
                        {
                            match: /\$\(build.date\)/g,
                            replacement: buildDateString
                        },
                        {
                            match: /\$\(build.branch\)/g,
                            replacement: "<%= pkg.name %>"
                        },
                        {   // Strip file references
                            match: /(.*)<reference(.*)\r\n/g,
                            replacement: ""
                        }
                    ]
                },
                files: [
                  {expand: true, flatten: true, src: ["bin/WinJS.Desktop/js/*.js"], dest: "bin/WinJS.Desktop/js/"},
                  {expand: true, flatten: true, src: ["bin/WinJS.Desktop/js/" + localeFolder + "/*.js"], dest: "bin/WinJS.Desktop/js/" + localeFolder + "/"},
                  {expand: true, flatten: true, src: ["bin/WinJS.Phone/js/*.js"], dest: "bin/WinJS.Phone/js/"},
                  {expand: true, flatten: true, src: ["bin/WinJS.Phone/js/" + localeFolder + "/*.js"], dest: "bin/WinJS.Phone/js/" + localeFolder + "/"}
                ]
            }
        },

        less: {
            desktopDark: {
                src: ["src/less/desktop-dark.less"],
                dest: "bin/WinJS.Desktop/css/ui-dark.css"
            },
            desktopLight: {
                src: ["src/less/desktop-light.less"],
                dest: "bin/WinJS.Desktop/css/ui-light.css"
            },
            phoneDark: {
                src: ["src/less/phone-dark.less"],
                dest: "bin/WinJS.Phone/css/ui-dark.css"
            },
            phoneLight: {
                src: ["src/less/phone-light.less"],
                dest: "bin/WinJS.Phone/css/ui-light.css"
            },
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-typescript");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-replace");
    grunt.loadNpmTasks("grunt-contrib-clean");

    grunt.registerTask("default", ["clean", "less", "concat", "replace"]);
    grunt.registerTask("css", ["less"]);
    grunt.registerTask("base", ["clean:base", "concat:baseDesktop", "concat:basePhone", "concat:baseStrings", "replace"]);
    grunt.registerTask("ui", ["clean:ui", "concat:uiDesktop", "concat:uiPhone", "concat:uiStrings", "replace"]);
}