Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var stack = require('@react-navigation/stack');
var i18n = require('i18n-js');
var dateFns = require('date-fns');
var reactNative = require('react-native');
var Pdf = require('react-native-pdf');
var Sound = require('react-native-sound');
var RNFS = require('react-native-fs');
var etendoUiLibrary = require('etendo-ui-library');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var i18n__default = /*#__PURE__*/_interopDefaultLegacy(i18n);
var Pdf__default = /*#__PURE__*/_interopDefaultLegacy(Pdf);
var Sound__default = /*#__PURE__*/_interopDefaultLegacy(Sound);
var RNFS__default = /*#__PURE__*/_interopDefaultLegacy(RNFS);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Home$2={welcome:"Bienvenido a Etendo",productList:"Lista de productos",newProduct:"Añadir nuevo producto",typeProduct:"Buscador de productos",searchBarcode:"Escanear"};var ProductDetail$1={welcome:"Bienvenido a Etendo",newProduct:"Añade un nuevo producto",editProduct:"Editar producto",products:"Productos",nameExample:"Ej. Lata de atún",searchKeyExample:"Eg. ES/0003",barcode:"Código de barras",searchKey:"Clave de Búsqueda",barcodePlaceholder:"Escribe o escanea el código"};var Table$1={products:"Productos",searchKey:"Clave de Búsqueda",barcode:"Código de Barras",barcodeShort:"Cód. Barras",actions:"Acciones",textEmptyTable:"Aún no has creado ningún registro.",commentEmptyTable:"Empieza añadiendo nuevos registros y se verán aquí."};var Modal$1={messageDelete:"Esta seguro de eliminar el producto?"};var Common$1={save:"Guardar",cancel:"Cancelar",accept:"Aceptar",goBack:"Volver"};var Success$1={saveProduct:"Producto creado correctamente",updateProduct:"Producto editado correctamente",deleteProduct:"Producto borrado correctamente"};var ES = {Home:Home$2,ProductDetail:ProductDetail$1,Table:Table$1,Modal:Modal$1,Common:Common$1,"Error":{product:"Ingrese el nombre del producto",deleteProduct:"Ocurrió un error al eliminar el producto",connection:"Error de conexión a la red"},Success:Success$1};

var Home$1={welcome:"Welcome To Etendo",productList:"Product list",newProduct:"Add new product",typeProduct:"Product finder",searchBarcode:"Scan"};var ProductDetail={welcome:"Bienvenido a Etendo",newProduct:"Add new product",editProduct:"Edit product",products:"Products",nameExample:"Eg. tuna can",searchKeyExample:"Eg. ES/0003",barcode:"Barcode",searchKey:"Search Key",barcodePlaceholder:"Type or scan the code"};var Table={products:"Products",searchKey:"Search Key",barcode:"Barcode",barcodeShort:"Barcode",actions:"Actions",textEmptyTable:"There are no records to display.",commentEmptyTable:"Start adding new records and they will be displayed here."};var Modal={messageDelete:"Are you sure to remove the product?"};var Common={save:"Save",cancel:"Cancel",accept:"Accept",goBack:"Go back"};var Success={saveProduct:"Product successfully created",updateProduct:"Product successfully edited",deleteProduct:"Product successfully deleted"};var EN = {Home:Home$1,ProductDetail:ProductDetail,Table:Table,Modal:Modal,Common:Common,"Error":{product:"Enter the product name",deleteProduct:"An error occurred while deleting the product",connection:"Network connection error"},Success:Success};

var supportedLocales = {
    'en-US': EN,
    'es-ES': ES,
};
var Localization = {
    locale: 'en-US',
};
var fallbackLanguage = 'en-US';
var fallbackDateLocale = dateFns.enUS;
var dateLocales = { enUS: dateFns.enUS, esES: dateFns.esES };
var locale = {
    currentDateLocale: null,
    i18n: i18n__default["default"],
    init: function () {
        i18n__default["default"].locale = 'en-US';
        i18n__default["default"].fallbacks = true;
        i18n__default["default"].defaultLocale = fallbackLanguage;
        i18n__default["default"].translations = supportedLocales;
        if (supportedLocales[Localization.locale]) {
            i18n__default["default"].translations[Localization.locale] =
                supportedLocales[Localization.locale];
            this.currentDateLocale =
                dateLocales[Localization.locale.replace('-', '')] || null;
        }
        else {
            i18n__default["default"].translations[fallbackLanguage] = supportedLocales[fallbackLanguage];
            this.currentDateLocale = fallbackDateLocale;
        }
    },
    t: function (key, params) {
        return i18n__default["default"].t(key, params);
    },
    setCurrentLanguage: function (input) {
        var newLocal = input.replace('_', '-');
        i18n__default["default"].locale = newLocal;
        i18n__default["default"].translations = {};
        if (supportedLocales[newLocal]) {
            i18n__default["default"].translations[newLocal] = supportedLocales[newLocal];
        }
    },
    formatDate: function (date, formatStr) {
        try {
            return dateFns.format(date, formatStr, { locale: this.getDeviceLocaleForDate() });
        }
        catch (error) {
            throw new Error("".concat(error.message, " - Params: Date: ").concat(date, " - Format String: ").concat(formatStr));
        }
    },
    parseISODate: function (date) {
        return dateFns.parseISO(date);
    },
    getDeviceLocale: function () {
        if (supportedLocales[Localization.locale]) {
            return i18n__default["default"].locale;
        }
        else {
            return fallbackLanguage;
        }
    },
    getDeviceLocaleForDate: function () {
        return this.currentDateLocale || fallbackDateLocale;
    },
    formatLanguageUnderscore: function (language, dash) {
        switch (language) {
            case 'en':
            case 'en-US':
            case 'en_US':
                return dash ? 'en-US' : 'en_US';
            case 'es':
            case 'es-ES':
            case 'es_ES':
                return dash ? 'es-ES' : 'es_ES';
            default:
                return dash ? 'en-US' : 'en_US';
        }
    },
    getLanguageName: function (language) {
        var formattedLanguage = this.formatLanguageUnderscore(language, true);
        return supportedLocales[formattedLanguage] ? formattedLanguage : null;
    },
    languageByDefault: function () {
        return this.formatLanguageUnderscore('', true);
    },
};

// Colors
var NEUTRAL_0 = '#FCFCFD';
var NEUTRAL_10 = '#F5F6FA';
var NEUTRAL_20 = '#D3D7E9';
var NEUTRAL_100 = '#000000';

var width$1 = reactNative.Dimensions.get('window').width;
var styles = reactNative.StyleSheet.create({
    audioContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    backButton: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 16,
    },
    container: {
        backgroundColor: NEUTRAL_0,
        flex: 1,
    },
    fileContainer: {
        flex: 1,
        padding: 16,
    },
    fileItem: {
        alignItems: 'center',
        borderBottomColor: NEUTRAL_20,
        borderBottomWidth: 1,
        flexDirection: 'row',
        padding: 16,
    },
    fileItemIcon: {
        height: 24,
        marginRight: 16,
        width: 24,
    },
    fileItemText: {
        color: NEUTRAL_100,
        fontSize: 16,
    },
    fileName: {
        color: NEUTRAL_100,
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 16,
    },
    goBackButton: {
        marginLeft: 'auto',
    },
    header: {
        alignItems: 'center',
        borderBottomWidth: 1,
        backgroundColor: NEUTRAL_10,
        borderBottomColor: NEUTRAL_20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        alignSelf: 'center',
        flex: 1,
        resizeMode: 'contain',
        width: width$1 - 32,
    },
    noFileContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    noFileText: {
        color: NEUTRAL_100,
        fontSize: 18,
    },
    pdf: {
        alignSelf: 'center',
        flex: 1,
        width: width$1 - 32,
    },
    textContainer: {
        backgroundColor: NEUTRAL_0,
        borderRadius: 8,
        flex: 1,
        marginBottom: 16,
        padding: 16,
    },
    textContent: {
        color: NEUTRAL_100,
        fontSize: 16,
    },
    unsupportedContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    unsupportedText: {
        color: NEUTRAL_100,
        fontSize: 18,
    },
});

// getting screen width and height
var width = reactNative.Dimensions.get('screen').width;
var height = reactNative.Dimensions.get('screen').height;
var isTabletDevice = function () {
    var pixelDensity = reactNative.PixelRatio.get();
    var adjustedWidth = width * pixelDensity;
    var adjustedHeight = height * pixelDensity;
    if (pixelDensity < 1.6 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
        return true;
    }
    else {
        return (pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920));
    }
};
// Clean file name from unwanted characters
var cleanFileName = function (fileName) {
    return fileName.replace(/[-_][A-Z0-9]{8,}.*?\./, '.');
};
isTabletDevice();

var Home = function (_a) {
    _a.navigationContainer; var sharedFiles = _a.sharedFiles;
    var _b = React.useState(null), audioPlayer = _b[0], setAudioPlayer = _b[1];
    var _c = React.useState(false), isPlaying = _c[0], setIsPlaying = _c[1];
    var _d = React.useState(''), textContent = _d[0], setTextContent = _d[1];
    var _e = React.useState(null), selectedFile = _e[0], setSelectedFile = _e[1];
    React.useEffect(function () {
        if (sharedFiles && sharedFiles.length > 0) {
            if (sharedFiles.length === 1) {
                setSelectedFile(sharedFiles[0]);
            }
            else {
                setSelectedFile(null);
            }
        }
    }, [sharedFiles]);
    React.useEffect(function () {
        var sound = null;
        setAudioPlayer(null);
        setIsPlaying(false);
        setTextContent('');
        var readTextFile = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
            var content, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, RNFS__default["default"].readFile(filePath, 'utf8')];
                    case 1:
                        content = _a.sent();
                        setTextContent(content);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Error reading text file:', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        if (selectedFile) {
            if (selectedFile.fileMimeType.startsWith('text/')) {
                readTextFile(selectedFile.filePath);
            }
            else if (selectedFile.fileMimeType.startsWith('audio/')) {
                sound = new Sound__default["default"](selectedFile.filePath, '', function (error) {
                    if (error) {
                        console.error('Error loading sound:', error);
                    }
                });
                setAudioPlayer(sound);
            }
        }
        return function () {
            if (sound) {
                sound.release();
            }
        };
    }, [selectedFile]);
    var toggleAudioPlayback = React.useCallback(function () {
        if (audioPlayer) {
            if (isPlaying) {
                audioPlayer.pause();
                setIsPlaying(false);
            }
            else {
                audioPlayer.play(function (success) {
                    if (!success) {
                        console.error('Error in playback');
                    }
                    setIsPlaying(false);
                });
                setIsPlaying(true);
            }
        }
    }, [audioPlayer, isPlaying]);
    var handleFileSelect = function (file) {
        setSelectedFile(file);
    };
    var renderFileContent = function (file) {
        switch (true) {
            case file.fileMimeType === 'application/pdf':
                return (React__default["default"].createElement(Pdf__default["default"], { source: { uri: file.filePath }, style: styles.pdf, onError: function (error) {
                        console.error(error);
                    } }));
            case file.fileMimeType.startsWith('image/'):
                return (React__default["default"].createElement(reactNative.Image, { source: { uri: file.filePath }, style: styles.image, resizeMode: "contain" }));
            case file.fileMimeType.startsWith('audio/'):
                return (React__default["default"].createElement(reactNative.View, { style: styles.audioContainer },
                    React__default["default"].createElement(etendoUiLibrary.Button, { typeStyle: 'terciary', text: isPlaying ? 'Pause Audio' : 'Play Audio', onPress: toggleAudioPlayback })));
            case file.fileMimeType.startsWith('text/'):
                return (React__default["default"].createElement(reactNative.ScrollView, { style: styles.textContainer },
                    React__default["default"].createElement(reactNative.Text, { style: styles.textContent }, textContent)));
            default:
                return (React__default["default"].createElement(reactNative.View, { style: styles.unsupportedContainer },
                    React__default["default"].createElement(reactNative.Text, { style: styles.unsupportedText }, "File type not supported.")));
        }
    };
    var renderFileItem = function (_a) {
        var item = _a.item;
        return (React__default["default"].createElement(reactNative.TouchableOpacity, { style: styles.fileItem, onPress: function () { return handleFileSelect(item); } },
            React__default["default"].createElement(reactNative.Text, { style: styles.fileItemText }, item.fileName)));
    };
    return (React__default["default"].createElement(reactNative.View, { style: styles.container },
        React__default["default"].createElement(reactNative.View, { style: styles.header },
            React__default["default"].createElement(reactNative.Text, { style: styles.headerTitle }, "Shared Files"),
            React__default["default"].createElement(etendoUiLibrary.Button, { typeStyle: 'terciary', text: 'Go back', onPress: function () { return setSelectedFile(null); }, iconLeft: React__default["default"].createElement(etendoUiLibrary.ArrowLeftIcon, null) })),
        sharedFiles && sharedFiles.length > 0 ? (selectedFile && sharedFiles.length > 1 ? (React__default["default"].createElement(reactNative.View, { style: styles.fileContainer },
            React__default["default"].createElement(reactNative.Text, { style: styles.fileName }, selectedFile.fileName),
            renderFileContent(selectedFile))) : sharedFiles.length > 1 ? (React__default["default"].createElement(reactNative.FlatList, { data: sharedFiles, keyExtractor: function (item, index) { return index.toString(); }, renderItem: renderFileItem, contentContainerStyle: { paddingBottom: 16 } })) : (React__default["default"].createElement(reactNative.View, { style: styles.fileContainer },
            React__default["default"].createElement(reactNative.Text, { style: styles.fileName }, cleanFileName(sharedFiles[0].fileName)),
            renderFileContent(sharedFiles[0])))) : (React__default["default"].createElement(reactNative.View, { style: styles.noFileContainer },
            React__default["default"].createElement(reactNative.Text, { style: styles.noFileText }, "No files uploaded.")))));
};

var Stack = stack.createStackNavigator();
var App = function (_a) {
    var language = _a.language, navigationContainer = _a.navigationContainer, dataUser = _a.dataUser, sharedFiles = _a.sharedFiles;
    React.useEffect(function () {
        locale.init();
    }, []);
    React.useEffect(function () {
        locale.setCurrentLanguage(locale.formatLanguageUnderscore(language));
    }, [language]);
    return (React__default["default"].createElement(Stack.Navigator, { initialRouteName: "Home" },
        React__default["default"].createElement(Stack.Screen, { name: "Home", options: { headerShown: false } }, function (props) { return (React__default["default"].createElement(Home, __assign({}, props, { navigationContainer: navigationContainer, dataUser: dataUser, sharedFiles: sharedFiles }))); })));
};

exports.App = App;
exports["default"] = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXRlbmRvRG9jdW1lbnRzTWFuYWdlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3ViYXBwL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi8uLi9zcmMvbG9jYWxpemF0aW9uL2xvY2FsZS50cyIsIi4uLy4uL3NyYy9zdHlsZXMvY29sb3JzLnRzIiwiLi4vLi4vc3JjL3NjcmVlbnMvaG9tZS9zdHlsZXMudHMiLCIuLi8uLi9zcmMvdXRpbHMvaW5kZXgudHMiLCIuLi8uLi9zcmMvc2NyZWVucy9ob21lL2luZGV4LnRzeCIsIi4uLy4uL0FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19lc0RlY29yYXRlKGN0b3IsIGRlc2NyaXB0b3JJbiwgZGVjb3JhdG9ycywgY29udGV4dEluLCBpbml0aWFsaXplcnMsIGV4dHJhSW5pdGlhbGl6ZXJzKSB7XHJcbiAgICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cclxuICAgIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XHJcbiAgICB2YXIgdGFyZ2V0ID0gIWRlc2NyaXB0b3JJbiAmJiBjdG9yID8gY29udGV4dEluW1wic3RhdGljXCJdID8gY3RvciA6IGN0b3IucHJvdG90eXBlIDogbnVsbDtcclxuICAgIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xyXG4gICAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbi5hY2Nlc3MpIGNvbnRleHQuYWNjZXNzW3BdID0gY29udGV4dEluLmFjY2Vzc1twXTtcclxuICAgICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xyXG4gICAgICAgIGlmIChraW5kID09PSBcImFjY2Vzc29yXCIpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuZ2V0KSkgZGVzY3JpcHRvci5nZXQgPSBfO1xyXG4gICAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xyXG4gICAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcclxuICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XHJcbiAgICAgICAgICAgIGVsc2UgZGVzY3JpcHRvcltrZXldID0gXztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGFyZ2V0KSBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSwgZGVzY3JpcHRvcik7XHJcbiAgICBkb25lID0gdHJ1ZTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XHJcbiAgICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5pdGlhbGl6ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVzZVZhbHVlID8gdmFsdWUgOiB2b2lkIDA7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wcm9wS2V5KHgpIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcclxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcclxuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgXCJuYW1lXCIsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcHJlZml4ID8gXCJcIi5jb25jYXQocHJlZml4LCBcIiBcIiwgbmFtZSkgOiBuYW1lIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogZmFsc2UgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XHJcbiAgICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcclxuICAgIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xyXG4gICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDApIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkLlwiKTtcclxuICAgICAgICB2YXIgZGlzcG9zZTtcclxuICAgICAgICBpZiAoYXN5bmMpIHtcclxuICAgICAgICAgICAgaWYgKCFTeW1ib2wuYXN5bmNEaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jRGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuYXN5bmNEaXNwb3NlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpc3Bvc2UgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBpZiAoIVN5bWJvbC5kaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmRpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmRpc3Bvc2VdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGRpc3Bvc2UgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBub3QgZGlzcG9zYWJsZS5cIik7XHJcbiAgICAgICAgZW52LnN0YWNrLnB1c2goeyB2YWx1ZTogdmFsdWUsIGRpc3Bvc2U6IGRpc3Bvc2UsIGFzeW5jOiBhc3luYyB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGFzeW5jKSB7XHJcbiAgICAgICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxudmFyIF9TdXBwcmVzc2VkRXJyb3IgPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcclxuICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2Rpc3Bvc2VSZXNvdXJjZXMoZW52KSB7XHJcbiAgICBmdW5jdGlvbiBmYWlsKGUpIHtcclxuICAgICAgICBlbnYuZXJyb3IgPSBlbnYuaGFzRXJyb3IgPyBuZXcgX1N1cHByZXNzZWRFcnJvcihlLCBlbnYuZXJyb3IsIFwiQW4gZXJyb3Igd2FzIHN1cHByZXNzZWQgZHVyaW5nIGRpc3Bvc2FsLlwiKSA6IGU7XHJcbiAgICAgICAgZW52Lmhhc0Vycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICAgICAgd2hpbGUgKGVudi5zdGFjay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHJlYyA9IGVudi5zdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZWMuZGlzcG9zZSAmJiByZWMuZGlzcG9zZS5jYWxsKHJlYy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVjLmFzeW5jKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkudGhlbihuZXh0LCBmdW5jdGlvbihlKSB7IGZhaWwoZSk7IHJldHVybiBuZXh0KCk7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBmYWlsKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIF9fZXh0ZW5kczogX19leHRlbmRzLFxyXG4gICAgX19hc3NpZ246IF9fYXNzaWduLFxyXG4gICAgX19yZXN0OiBfX3Jlc3QsXHJcbiAgICBfX2RlY29yYXRlOiBfX2RlY29yYXRlLFxyXG4gICAgX19wYXJhbTogX19wYXJhbSxcclxuICAgIF9fbWV0YWRhdGE6IF9fbWV0YWRhdGEsXHJcbiAgICBfX2F3YWl0ZXI6IF9fYXdhaXRlcixcclxuICAgIF9fZ2VuZXJhdG9yOiBfX2dlbmVyYXRvcixcclxuICAgIF9fY3JlYXRlQmluZGluZzogX19jcmVhdGVCaW5kaW5nLFxyXG4gICAgX19leHBvcnRTdGFyOiBfX2V4cG9ydFN0YXIsXHJcbiAgICBfX3ZhbHVlczogX192YWx1ZXMsXHJcbiAgICBfX3JlYWQ6IF9fcmVhZCxcclxuICAgIF9fc3ByZWFkOiBfX3NwcmVhZCxcclxuICAgIF9fc3ByZWFkQXJyYXlzOiBfX3NwcmVhZEFycmF5cyxcclxuICAgIF9fc3ByZWFkQXJyYXk6IF9fc3ByZWFkQXJyYXksXHJcbiAgICBfX2F3YWl0OiBfX2F3YWl0LFxyXG4gICAgX19hc3luY0dlbmVyYXRvcjogX19hc3luY0dlbmVyYXRvcixcclxuICAgIF9fYXN5bmNEZWxlZ2F0b3I6IF9fYXN5bmNEZWxlZ2F0b3IsXHJcbiAgICBfX2FzeW5jVmFsdWVzOiBfX2FzeW5jVmFsdWVzLFxyXG4gICAgX19tYWtlVGVtcGxhdGVPYmplY3Q6IF9fbWFrZVRlbXBsYXRlT2JqZWN0LFxyXG4gICAgX19pbXBvcnRTdGFyOiBfX2ltcG9ydFN0YXIsXHJcbiAgICBfX2ltcG9ydERlZmF1bHQ6IF9faW1wb3J0RGVmYXVsdCxcclxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXHJcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0OiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxyXG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEluOiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXHJcbiAgICBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZTogX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXHJcbiAgICBfX2Rpc3Bvc2VSZXNvdXJjZXM6IF9fZGlzcG9zZVJlc291cmNlcyxcclxufTtcclxuIiwiaW1wb3J0IGkxOG4gZnJvbSAnaTE4bi1qcyc7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQge2VuVVMsIGVzRVMsIGZvcm1hdCwgcGFyc2VJU08sIExvY2FsZX0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5pbXBvcnQgRVMgZnJvbSAnLi4vbGFuZy9lc0VTLmpzb24nO1xuaW1wb3J0IEVOIGZyb20gJy4uL2xhbmcvZW5VUy5qc29uJztcblxuaW50ZXJmYWNlIFRyYW5zbGF0aW9ucyB7XG4gIFtrZXk6IHN0cmluZ106IHR5cGVvZiBFTiB8IHR5cGVvZiBFUztcbn1cblxuaW50ZXJmYWNlIExvY2FsZU1vZHVsZSB7XG4gIGN1cnJlbnREYXRlTG9jYWxlOiBMb2NhbGUgfCBudWxsO1xuICBpMThuOiB0eXBlb2YgaTE4bjtcbiAgaW5pdDogKCkgPT4gdm9pZDtcbiAgdDogKGtleTogc3RyaW5nLCBwYXJhbXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4gc3RyaW5nO1xuICBzZXRDdXJyZW50TGFuZ3VhZ2U6IChpbnB1dDogc3RyaW5nKSA9PiB2b2lkO1xuICBmb3JtYXREYXRlOiAoZGF0ZTogRGF0ZSB8IG51bWJlciwgZm9ybWF0U3RyOiBzdHJpbmcpID0+IHN0cmluZztcbiAgcGFyc2VJU09EYXRlOiAoZGF0ZTogc3RyaW5nKSA9PiBEYXRlO1xuICBnZXREZXZpY2VMb2NhbGU6ICgpID0+IHN0cmluZztcbiAgZ2V0RGV2aWNlTG9jYWxlRm9yRGF0ZTogKCkgPT4gTG9jYWxlO1xuICBmb3JtYXRMYW5ndWFnZVVuZGVyc2NvcmU6IChsYW5ndWFnZTogc3RyaW5nLCBkYXNoPzogYm9vbGVhbikgPT4gc3RyaW5nO1xuICBnZXRMYW5ndWFnZU5hbWU6IChsYW5ndWFnZTogc3RyaW5nKSA9PiBzdHJpbmcgfCBudWxsO1xuICBsYW5ndWFnZUJ5RGVmYXVsdDogKCkgPT4gc3RyaW5nO1xufVxuXG5jb25zdCBzdXBwb3J0ZWRMb2NhbGVzOiBUcmFuc2xhdGlvbnMgPSB7XG4gICdlbi1VUyc6IEVOLFxuICAnZXMtRVMnOiBFUyxcbn07XG5cbmNvbnN0IExvY2FsaXphdGlvbiA9IHtcbiAgbG9jYWxlOiAnZW4tVVMnLFxufTtcblxuY29uc3QgZmFsbGJhY2tMYW5ndWFnZSA9ICdlbi1VUyc7XG5jb25zdCBmYWxsYmFja0RhdGVMb2NhbGUgPSBlblVTO1xuY29uc3QgZGF0ZUxvY2FsZXM6IFJlY29yZDxzdHJpbmcsIExvY2FsZT4gPSB7ZW5VUywgZXNFU307XG5cbmNvbnN0IGxvY2FsZTogTG9jYWxlTW9kdWxlID0ge1xuICBjdXJyZW50RGF0ZUxvY2FsZTogbnVsbCxcblxuICBpMThuLFxuICBpbml0KCkge1xuICAgIGkxOG4ubG9jYWxlID0gJ2VuLVVTJztcbiAgICBpMThuLmZhbGxiYWNrcyA9IHRydWU7XG4gICAgaTE4bi5kZWZhdWx0TG9jYWxlID0gZmFsbGJhY2tMYW5ndWFnZTtcbiAgICBpMThuLnRyYW5zbGF0aW9ucyA9IHN1cHBvcnRlZExvY2FsZXM7XG5cbiAgICBpZiAoc3VwcG9ydGVkTG9jYWxlc1tMb2NhbGl6YXRpb24ubG9jYWxlXSkge1xuICAgICAgaTE4bi50cmFuc2xhdGlvbnNbTG9jYWxpemF0aW9uLmxvY2FsZV0gPVxuICAgICAgICBzdXBwb3J0ZWRMb2NhbGVzW0xvY2FsaXphdGlvbi5sb2NhbGVdO1xuICAgICAgdGhpcy5jdXJyZW50RGF0ZUxvY2FsZSA9XG4gICAgICAgIGRhdGVMb2NhbGVzW0xvY2FsaXphdGlvbi5sb2NhbGUucmVwbGFjZSgnLScsICcnKV0gfHwgbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgaTE4bi50cmFuc2xhdGlvbnNbZmFsbGJhY2tMYW5ndWFnZV0gPSBzdXBwb3J0ZWRMb2NhbGVzW2ZhbGxiYWNrTGFuZ3VhZ2VdO1xuICAgICAgdGhpcy5jdXJyZW50RGF0ZUxvY2FsZSA9IGZhbGxiYWNrRGF0ZUxvY2FsZTtcbiAgICB9XG4gIH0sXG5cbiAgdChrZXksIHBhcmFtcykge1xuICAgIHJldHVybiBpMThuLnQoa2V5LCBwYXJhbXMpO1xuICB9LFxuXG4gIHNldEN1cnJlbnRMYW5ndWFnZShpbnB1dCkge1xuICAgIGNvbnN0IG5ld0xvY2FsID0gaW5wdXQucmVwbGFjZSgnXycsICctJyk7XG4gICAgaTE4bi5sb2NhbGUgPSBuZXdMb2NhbDtcbiAgICBpMThuLnRyYW5zbGF0aW9ucyA9IHt9O1xuICAgIGlmIChzdXBwb3J0ZWRMb2NhbGVzW25ld0xvY2FsXSkge1xuICAgICAgaTE4bi50cmFuc2xhdGlvbnNbbmV3TG9jYWxdID0gc3VwcG9ydGVkTG9jYWxlc1tuZXdMb2NhbF07XG4gICAgfVxuICB9LFxuXG4gIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0U3RyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgZm9ybWF0U3RyLCB7bG9jYWxlOiB0aGlzLmdldERldmljZUxvY2FsZUZvckRhdGUoKX0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCR7ZXJyb3IubWVzc2FnZX0gLSBQYXJhbXM6IERhdGU6ICR7ZGF0ZX0gLSBGb3JtYXQgU3RyaW5nOiAke2Zvcm1hdFN0cn1gLFxuICAgICAgKTtcbiAgICB9XG4gIH0sXG5cbiAgcGFyc2VJU09EYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gcGFyc2VJU08oZGF0ZSk7XG4gIH0sXG5cbiAgZ2V0RGV2aWNlTG9jYWxlKCkge1xuICAgIGlmIChzdXBwb3J0ZWRMb2NhbGVzW0xvY2FsaXphdGlvbi5sb2NhbGVdKSB7XG4gICAgICByZXR1cm4gaTE4bi5sb2NhbGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxsYmFja0xhbmd1YWdlO1xuICAgIH1cbiAgfSxcblxuICBnZXREZXZpY2VMb2NhbGVGb3JEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnREYXRlTG9jYWxlIHx8IGZhbGxiYWNrRGF0ZUxvY2FsZTtcbiAgfSxcblxuICBmb3JtYXRMYW5ndWFnZVVuZGVyc2NvcmUobGFuZ3VhZ2UsIGRhc2gpIHtcbiAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICBjYXNlICdlbic6XG4gICAgICBjYXNlICdlbi1VUyc6XG4gICAgICBjYXNlICdlbl9VUyc6XG4gICAgICAgIHJldHVybiBkYXNoID8gJ2VuLVVTJyA6ICdlbl9VUyc7XG4gICAgICBjYXNlICdlcyc6XG4gICAgICBjYXNlICdlcy1FUyc6XG4gICAgICBjYXNlICdlc19FUyc6XG4gICAgICAgIHJldHVybiBkYXNoID8gJ2VzLUVTJyA6ICdlc19FUyc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGFzaCA/ICdlbi1VUycgOiAnZW5fVVMnO1xuICAgIH1cbiAgfSxcblxuICBnZXRMYW5ndWFnZU5hbWUobGFuZ3VhZ2UpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWRMYW5ndWFnZSA9IHRoaXMuZm9ybWF0TGFuZ3VhZ2VVbmRlcnNjb3JlKGxhbmd1YWdlLCB0cnVlKTtcbiAgICByZXR1cm4gc3VwcG9ydGVkTG9jYWxlc1tmb3JtYXR0ZWRMYW5ndWFnZV0gPyBmb3JtYXR0ZWRMYW5ndWFnZSA6IG51bGw7XG4gIH0sXG5cbiAgbGFuZ3VhZ2VCeURlZmF1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0TGFuZ3VhZ2VVbmRlcnNjb3JlKCcnLCB0cnVlKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTtcbiIsIi8vIENvbG9yc1xuZXhwb3J0IGNvbnN0IE5FVVRSQUxfMCA9ICcjRkNGQ0ZEJztcbmV4cG9ydCBjb25zdCBORVVUUkFMXzEwID0gJyNGNUY2RkEnO1xuZXhwb3J0IGNvbnN0IE5FVVRSQUxfMjAgPSAnI0QzRDdFOSc7XG5leHBvcnQgY29uc3QgRVRFTkRPX1BSSU1BUllfREFSSyA9ICcjMDAyOTZGJztcbmV4cG9ydCBjb25zdCBORVVUUkFMXzEwMCA9ICcjMDAwMDAwJztcbiIsImltcG9ydCB7IFN0eWxlU2hlZXQsIERpbWVuc2lvbnMgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgTkVVVFJBTF8wLCBORVVUUkFMXzEwLCBORVVUUkFMXzEwMCwgTkVVVFJBTF8yMCB9IGZyb20gJy4uLy4uL3N0eWxlcy9jb2xvcnMnO1xuXG5jb25zdCB7IHdpZHRoIH0gPSBEaW1lbnNpb25zLmdldCgnd2luZG93Jyk7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGF1ZGlvQ29udGFpbmVyOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZmxleDogMSxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIGJhY2tCdXR0b246IHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBtYXJnaW5Cb3R0b206IDE2LFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IE5FVVRSQUxfMCxcbiAgICBmbGV4OiAxLFxuICB9LFxuICBmaWxlQ29udGFpbmVyOiB7XG4gICAgZmxleDogMSxcbiAgICBwYWRkaW5nOiAxNixcbiAgfSxcbiAgZmlsZUl0ZW06IHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBib3JkZXJCb3R0b21Db2xvcjogTkVVVFJBTF8yMCxcbiAgICBib3JkZXJCb3R0b21XaWR0aDogMSxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBwYWRkaW5nOiAxNixcbiAgfSxcbiAgZmlsZUl0ZW1JY29uOiB7XG4gICAgaGVpZ2h0OiAyNCxcbiAgICBtYXJnaW5SaWdodDogMTYsXG4gICAgd2lkdGg6IDI0LFxuICB9LFxuICBmaWxlSXRlbVRleHQ6IHtcbiAgICBjb2xvcjogTkVVVFJBTF8xMDAsXG4gICAgZm9udFNpemU6IDE2LFxuICB9LFxuICBmaWxlTmFtZToge1xuICAgIGNvbG9yOiBORVVUUkFMXzEwMCxcbiAgICBmb250U2l6ZTogMjAsXG4gICAgZm9udFdlaWdodDogJzYwMCcsXG4gICAgbWFyZ2luQm90dG9tOiAxNixcbiAgfSxcbiAgZ29CYWNrQnV0dG9uOiB7XG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICB9LFxuICBoZWFkZXI6IHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBib3JkZXJCb3R0b21XaWR0aDogMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IE5FVVRSQUxfMTAsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IE5FVVRSQUxfMjAsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBwYWRkaW5nSG9yaXpvbnRhbDogMTYsXG4gICAgcGFkZGluZ1ZlcnRpY2FsOiAxMixcbiAgfSxcbiAgaGVhZGVyVGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTgsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB9LFxuICBpbWFnZToge1xuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgZmxleDogMSxcbiAgICByZXNpemVNb2RlOiAnY29udGFpbicsXG4gICAgd2lkdGg6IHdpZHRoIC0gMzIsXG4gIH0sXG4gIG5vRmlsZUNvbnRhaW5lcjoge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXg6IDEsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICBub0ZpbGVUZXh0OiB7XG4gICAgY29sb3I6IE5FVVRSQUxfMTAwLFxuICAgIGZvbnRTaXplOiAxOCxcbiAgfSxcbiAgcGRmOiB7XG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICBmbGV4OiAxLFxuICAgIHdpZHRoOiB3aWR0aCAtIDMyLFxuICB9LFxuICB0ZXh0Q29udGFpbmVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBORVVUUkFMXzAsXG4gICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgIGZsZXg6IDEsXG4gICAgbWFyZ2luQm90dG9tOiAxNixcbiAgICBwYWRkaW5nOiAxNixcbiAgfSxcbiAgdGV4dENvbnRlbnQ6IHtcbiAgICBjb2xvcjogTkVVVFJBTF8xMDAsXG4gICAgZm9udFNpemU6IDE2LFxuICB9LFxuICB1bnN1cHBvcnRlZENvbnRhaW5lcjoge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXg6IDEsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICB1bnN1cHBvcnRlZFRleHQ6IHtcbiAgICBjb2xvcjogTkVVVFJBTF8xMDAsXG4gICAgZm9udFNpemU6IDE4LFxuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBEaW1lbnNpb25zLCBQaXhlbFJhdGlvIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuLy8gZ2V0dGluZyBzY3JlZW4gd2lkdGggYW5kIGhlaWdodFxuY29uc3Qgd2lkdGggPSBEaW1lbnNpb25zLmdldCgnc2NyZWVuJykud2lkdGg7XG5jb25zdCBoZWlnaHQgPSBEaW1lbnNpb25zLmdldCgnc2NyZWVuJykuaGVpZ2h0O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVSYW5kb21OdW1iZXIgPSAoKSA9PiB7XG4gIGxldCByYW5kb21TdHJpbmcgPSBNYXRoLmZsb29yKFxuICAgIDEwMDAwMDAwMDAgKyBNYXRoLnJhbmRvbSgpICogOTAwMDAwMDAwMCxcbiAgKS50b1N0cmluZygpO1xuICByZXR1cm4gcmFuZG9tU3RyaW5nO1xufTtcblxuY29uc3QgaXNUYWJsZXREZXZpY2UgPSAoKSA9PiB7XG4gIGxldCBwaXhlbERlbnNpdHkgPSBQaXhlbFJhdGlvLmdldCgpO1xuICBjb25zdCBhZGp1c3RlZFdpZHRoID0gd2lkdGggKiBwaXhlbERlbnNpdHk7XG4gIGNvbnN0IGFkanVzdGVkSGVpZ2h0ID0gaGVpZ2h0ICogcGl4ZWxEZW5zaXR5O1xuICBpZiAocGl4ZWxEZW5zaXR5IDwgMS42ICYmIChhZGp1c3RlZFdpZHRoID49IDEwMDAgfHwgYWRqdXN0ZWRIZWlnaHQgPj0gMTAwMCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgcGl4ZWxEZW5zaXR5ID09PSAyICYmIChhZGp1c3RlZFdpZHRoID49IDE5MjAgfHwgYWRqdXN0ZWRIZWlnaHQgPj0gMTkyMClcbiAgICApO1xuICB9XG59O1xuXG4vLyBDbGVhbiBmaWxlIG5hbWUgZnJvbSB1bndhbnRlZCBjaGFyYWN0ZXJzXG5leHBvcnQgY29uc3QgY2xlYW5GaWxlTmFtZSA9IChmaWxlTmFtZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBmaWxlTmFtZS5yZXBsYWNlKC9bLV9dW0EtWjAtOV17OCx9Lio/XFwuLywgJy4nKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1RhYmxldCA9IGlzVGFibGV0RGV2aWNlKCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBWaWV3LFxuICBUZXh0LFxuICBJbWFnZSxcbiAgU2Nyb2xsVmlldyxcbiAgVG91Y2hhYmxlT3BhY2l0eSxcbiAgRmxhdExpc3QsXG59IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgUGRmIGZyb20gJ3JlYWN0LW5hdGl2ZS1wZGYnO1xuaW1wb3J0IFNvdW5kIGZyb20gJ3JlYWN0LW5hdGl2ZS1zb3VuZCc7XG5pbXBvcnQgUk5GUyBmcm9tICdyZWFjdC1uYXRpdmUtZnMnO1xuXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBjbGVhbkZpbGVOYW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgSG9tZVByb3BzLCBJRmlsZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQXJyb3dMZWZ0SWNvbiwgQnV0dG9uIH0gZnJvbSAnZXRlbmRvLXVpLWxpYnJhcnknO1xuXG5jb25zdCBIb21lOiBSZWFjdC5GQzxIb21lUHJvcHM+ID0gKHsgbmF2aWdhdGlvbkNvbnRhaW5lciwgc2hhcmVkRmlsZXMgfSkgPT4ge1xuICBjb25zdCBbYXVkaW9QbGF5ZXIsIHNldEF1ZGlvUGxheWVyXSA9IHVzZVN0YXRlPFNvdW5kIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFt0ZXh0Q29udGVudCwgc2V0VGV4dENvbnRlbnRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtzZWxlY3RlZEZpbGUsIHNldFNlbGVjdGVkRmlsZV0gPSB1c2VTdGF0ZTxJRmlsZSB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNoYXJlZEZpbGVzICYmIHNoYXJlZEZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChzaGFyZWRGaWxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRGaWxlKHNoYXJlZEZpbGVzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNlbGVjdGVkRmlsZShudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzaGFyZWRGaWxlc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHNvdW5kOiBTb3VuZCB8IG51bGwgPSBudWxsO1xuXG4gICAgc2V0QXVkaW9QbGF5ZXIobnVsbCk7XG4gICAgc2V0SXNQbGF5aW5nKGZhbHNlKTtcbiAgICBzZXRUZXh0Q29udGVudCgnJyk7XG5cbiAgICBjb25zdCByZWFkVGV4dEZpbGUgPSBhc3luYyAoZmlsZVBhdGg6IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IFJORlMucmVhZEZpbGUoZmlsZVBhdGgsICd1dGY4Jyk7XG4gICAgICAgIHNldFRleHRDb250ZW50KGNvbnRlbnQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVhZGluZyB0ZXh0IGZpbGU6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoc2VsZWN0ZWRGaWxlKSB7XG4gICAgICBpZiAoc2VsZWN0ZWRGaWxlLmZpbGVNaW1lVHlwZS5zdGFydHNXaXRoKCd0ZXh0LycpKSB7XG4gICAgICAgIHJlYWRUZXh0RmlsZShzZWxlY3RlZEZpbGUuZmlsZVBhdGgpO1xuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEZpbGUuZmlsZU1pbWVUeXBlLnN0YXJ0c1dpdGgoJ2F1ZGlvLycpKSB7XG4gICAgICAgIHNvdW5kID0gbmV3IFNvdW5kKHNlbGVjdGVkRmlsZS5maWxlUGF0aCwgJycsIGVycm9yID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgc291bmQ6JywgZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNldEF1ZGlvUGxheWVyKHNvdW5kKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIHNvdW5kLnJlbGVhc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbc2VsZWN0ZWRGaWxlXSk7XG5cbiAgY29uc3QgdG9nZ2xlQXVkaW9QbGF5YmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoYXVkaW9QbGF5ZXIpIHtcbiAgICAgIGlmIChpc1BsYXlpbmcpIHtcbiAgICAgICAgYXVkaW9QbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgc2V0SXNQbGF5aW5nKGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1ZGlvUGxheWVyLnBsYXkoc3VjY2VzcyA9PiB7XG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBwbGF5YmFjaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2F1ZGlvUGxheWVyLCBpc1BsYXlpbmddKTtcblxuICBjb25zdCBoYW5kbGVGaWxlU2VsZWN0ID0gKGZpbGU6IElGaWxlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRGaWxlKGZpbGUpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckZpbGVDb250ZW50ID0gKGZpbGU6IElGaWxlKSA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGZpbGUuZmlsZU1pbWVUeXBlID09PSAnYXBwbGljYXRpb24vcGRmJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGRmXG4gICAgICAgICAgICBzb3VyY2U9e3sgdXJpOiBmaWxlLmZpbGVQYXRoIH19XG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLnBkZn1cbiAgICAgICAgICAgIG9uRXJyb3I9e2Vycm9yID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlIGZpbGUuZmlsZU1pbWVUeXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc291cmNlPXt7IHVyaTogZmlsZS5maWxlUGF0aCB9fVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbWFnZX1cbiAgICAgICAgICAgIHJlc2l6ZU1vZGU9XCJjb250YWluXCJcbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSBmaWxlLmZpbGVNaW1lVHlwZS5zdGFydHNXaXRoKCdhdWRpby8nKTpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmF1ZGlvQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZVN0eWxlPSd0ZXJjaWFyeSdcbiAgICAgICAgICAgICAgdGV4dD17aXNQbGF5aW5nID8gJ1BhdXNlIEF1ZGlvJyA6ICdQbGF5IEF1ZGlvJ31cbiAgICAgICAgICAgICAgb25QcmVzcz17dG9nZ2xlQXVkaW9QbGF5YmFja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9WaWV3PlxuICAgICAgICApO1xuICAgICAgY2FzZSBmaWxlLmZpbGVNaW1lVHlwZS5zdGFydHNXaXRoKCd0ZXh0LycpOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTY3JvbGxWaWV3IHN0eWxlPXtzdHlsZXMudGV4dENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRleHRDb250ZW50fT57dGV4dENvbnRlbnR9PC9UZXh0PlxuICAgICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy51bnN1cHBvcnRlZENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnVuc3VwcG9ydGVkVGV4dH0+XG4gICAgICAgICAgICAgIEZpbGUgdHlwZSBub3Qgc3VwcG9ydGVkLlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyRmlsZUl0ZW0gPSAoeyBpdGVtIH06IHsgaXRlbTogSUZpbGUgfSkgPT4gKFxuICAgIDxUb3VjaGFibGVPcGFjaXR5XG4gICAgICBzdHlsZT17c3R5bGVzLmZpbGVJdGVtfVxuICAgICAgb25QcmVzcz17KCkgPT4gaGFuZGxlRmlsZVNlbGVjdChpdGVtKX1cbiAgICA+XG4gICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmZpbGVJdGVtVGV4dH0+e2l0ZW0uZmlsZU5hbWV9PC9UZXh0PlxuICAgIDwvVG91Y2hhYmxlT3BhY2l0eT5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuaGVhZGVyVGl0bGV9PlNoYXJlZCBGaWxlczwvVGV4dD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGVTdHlsZT0ndGVyY2lhcnknXG4gICAgICAgICAgdGV4dD0nR28gYmFjaydcbiAgICAgICAgICBvblByZXNzPXsoKSA9PiBzZXRTZWxlY3RlZEZpbGUobnVsbCl9XG4gICAgICAgICAgaWNvbkxlZnQ9ezxBcnJvd0xlZnRJY29uIC8+fVxuICAgICAgICAvPlxuICAgICAgPC9WaWV3PlxuXG4gICAgICB7c2hhcmVkRmlsZXMgJiYgc2hhcmVkRmlsZXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgc2VsZWN0ZWRGaWxlICYmIHNoYXJlZEZpbGVzLmxlbmd0aCA+IDEgPyAoXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5maWxlQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuZmlsZU5hbWV9PntzZWxlY3RlZEZpbGUuZmlsZU5hbWV9PC9UZXh0PlxuICAgICAgICAgICAge3JlbmRlckZpbGVDb250ZW50KHNlbGVjdGVkRmlsZSl9XG4gICAgICAgICAgPC9WaWV3PlxuICAgICAgICApIDogc2hhcmVkRmlsZXMubGVuZ3RoID4gMSA/IChcbiAgICAgICAgICA8RmxhdExpc3RcbiAgICAgICAgICAgIGRhdGE9e3NoYXJlZEZpbGVzfVxuICAgICAgICAgICAga2V5RXh0cmFjdG9yPXsoaXRlbSwgaW5kZXgpID0+IGluZGV4LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICByZW5kZXJJdGVtPXtyZW5kZXJGaWxlSXRlbX1cbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJTdHlsZT17eyBwYWRkaW5nQm90dG9tOiAxNiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5maWxlQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuZmlsZU5hbWV9PntjbGVhbkZpbGVOYW1lKHNoYXJlZEZpbGVzWzBdLmZpbGVOYW1lKX08L1RleHQ+XG4gICAgICAgICAgICB7cmVuZGVyRmlsZUNvbnRlbnQoc2hhcmVkRmlsZXNbMF0pfVxuICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgKVxuICAgICAgKSA6IChcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5ub0ZpbGVDb250YWluZXJ9PlxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMubm9GaWxlVGV4dH0+Tm8gZmlsZXMgdXBsb2FkZWQuPC9UZXh0PlxuICAgICAgICA8L1ZpZXc+XG4gICAgICApfVxuICAgIDwvVmlldz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3RhY2tOYXZpZ2F0b3IgfSBmcm9tICdAcmVhY3QtbmF2aWdhdGlvbi9zdGFjayc7XG5pbXBvcnQgbG9jYWxlIGZyb20gJy4vc3JjL2xvY2FsaXphdGlvbi9sb2NhbGUnO1xuaW1wb3J0IHsgSURhdGEsIElGaWxlLCBJTmF2aWdhdGlvbkNvbnRhaW5lclByb3BzIH0gZnJvbSAnLi9zcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL3NyYy9zY3JlZW5zL2hvbWUnO1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMge1xuICBsYW5ndWFnZTogc3RyaW5nO1xuICBkYXRhVXNlcjogSURhdGE7XG4gIG5hdmlnYXRpb25Db250YWluZXI6IElOYXZpZ2F0aW9uQ29udGFpbmVyUHJvcHM7XG4gIHNoYXJlZEZpbGVzOiBJRmlsZVtdO1xufVxuXG5jb25zdCBTdGFjayA9IGNyZWF0ZVN0YWNrTmF2aWdhdG9yKCk7XG5cbmNvbnN0IEFwcDogUmVhY3QuRkM8QXBwUHJvcHM+ID0gKHtcbiAgbGFuZ3VhZ2UsXG4gIG5hdmlnYXRpb25Db250YWluZXIsXG4gIGRhdGFVc2VyLFxuICBzaGFyZWRGaWxlcyxcbn0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbGUuaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbGUuc2V0Q3VycmVudExhbmd1YWdlKGxvY2FsZS5mb3JtYXRMYW5ndWFnZVVuZGVyc2NvcmUobGFuZ3VhZ2UpKTtcbiAgfSwgW2xhbmd1YWdlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2suTmF2aWdhdG9yIGluaXRpYWxSb3V0ZU5hbWU9XCJIb21lXCI+XG4gICAgICA8U3RhY2suU2NyZWVuIG5hbWU9XCJIb21lXCIgb3B0aW9ucz17eyBoZWFkZXJTaG93bjogZmFsc2UgfX0+XG4gICAgICAgIHtwcm9wcyA9PiAoXG4gICAgICAgICAgPEhvbWVcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIG5hdmlnYXRpb25Db250YWluZXI9e25hdmlnYXRpb25Db250YWluZXJ9XG4gICAgICAgICAgICBkYXRhVXNlcj17ZGF0YVVzZXJ9XG4gICAgICAgICAgICBzaGFyZWRGaWxlcz17c2hhcmVkRmlsZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvU3RhY2suU2NyZWVuPlxuICAgIDwvU3RhY2suTmF2aWdhdG9yPlxuICApO1xufTtcblxuZXhwb3J0IHsgQXBwIH07XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiZW5VUyIsImVzRVMiLCJpMThuIiwiZm9ybWF0IiwicGFyc2VJU08iLCJ3aWR0aCIsIkRpbWVuc2lvbnMiLCJTdHlsZVNoZWV0IiwiUGl4ZWxSYXRpbyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUk5GUyIsIlNvdW5kIiwidXNlQ2FsbGJhY2siLCJSZWFjdCIsIlBkZiIsIkltYWdlIiwiVmlldyIsIkJ1dHRvbiIsIlNjcm9sbFZpZXciLCJUZXh0IiwiVG91Y2hhYmxlT3BhY2l0eSIsIkFycm93TGVmdEljb24iLCJGbGF0TGlzdCIsImNyZWF0ZVN0YWNrTmF2aWdhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQkE7QUFDTyxJQUFJLFFBQVEsR0FBRyxXQUFXO0FBQ2pDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3JELFFBQVEsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0QsWUFBWSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLFlBQVksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekYsU0FBUztBQUNULFFBQVEsT0FBTyxDQUFDLENBQUM7QUFDakIsTUFBSztBQUNMLElBQUksT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMzQyxFQUFDO0FBeUVEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJO0FBQ3RELFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENB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
