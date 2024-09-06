	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="classical";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingPicture="files/mobile-ext/loadingPicture.jpg";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoLinkURL="http://wa.me/+917063515775";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Hide";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Show";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Show";bookConfig.aboutContactInfoTxt="<info><title>S2F1c3RhdiBSb3kgTWVkaWEgV29ya3MgJiBQcmludHM</title><desc>VGhpcyBEaWdpdGFsIEFsYnVtIElzIERlc2lnbmVkIEFuZCBEZXZlbG9wZWQgQnkgS2F1c3RhdiBSb3kgTWVkaWEgV29ya3MgJiBQcmludHM</desc><logo>Li9maWxlcy9leHRmaWxlcy9hYm91dC9LYXVzdGF2IFJveSBNZWRpYSBXb3JrcyAxIC0gTG9nby5qcGc</logo><keys><key name=\"RW1haWw\" type=\"Email\">Y29udGFjdC5rcm13QGdtYWlsLmNvbQ</key><key name=\"V2hhdHNBcHA\" type=\"Link\">aHR0cHM6Ly93YS5tZS8rOTE3MDYzNTE1Nzc1</key><key name=\"TW9iaWxl\" type=\"Phone\">NzA2MzUxNTc3NQ</key><key name=\"TWFpbiBPZmZpY2U\" type=\"Address\">TW9oYW5iYXRpLFRhcmFrZXN3YXIsSG9vZ2hseQ</key><key name=\"S2F1c3RhdiBSb3kgTWVkaWEgV29ya3MgQW5kIFByaW50cw\" type=\"Author\">S2F1c3RhdiBSb3kgTWVkaWEgV29ya3MgQW5kIFByaW50cw</key></keys></info> ";bookConfig.enablePageBack="Hide";bookConfig.ShareButtonVisible="Show";shareObj = [{"name":"WhatsApp","url":"whatsapp://send?text=See This Beautiful Digital Album-https://kaustavroy-lab.github.io/riyawedsdebanjan/  By Kaustav Roy Media Works & Prints","logo":"./files/mobile-ext/shares/R (4).png","title":"WhatsApp"}];bookConfig.isInsertFrameLinkEnable=" Hide";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Show";bookConfig.TableOfContentButtonVisible="Hide";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundURL="files/mobile-ext/BackgroundSoundURL.mp3";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1600";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Show";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Show";bookConfig.PhoneButtonIcon="files/mobile-ext/PhoneButtonIcon.png";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="hide";bookConfig.bgBeginColor="#1F2232";bookConfig.bgEndColor="#1F2232";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="PetalsDancing";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="Yes";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Hide";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="single";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="Yes";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#393454";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=42;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=1200;;bookConfig.securityType="1";bookConfig.CreatedTime ="240906133849";bookConfig.bookTitle="\"শুভ বিবাহ\" Digital Album By Kaustav Roy Media Works \& Prints";bookConfig.bookmarkCR="a8c6466fc83378cfe4171268cb716f234899b658";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var phoneNumber =[{"label":"", "number":"7063515775"}];var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoAlphaTransitionBanner","annoId":"202461311415462","alpha":"1","location":{"tannoName":"slider1","x":"0.029461279461279456","y":"0.042087542087542076","width":"0.9455667789001119","height":"0.5134680134680133","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1296","pageHeight":"864"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.image.TAnnoAlphaTransitionBanner","autoBool":"true","selectBtn":"false","duration":"5","Images":[{"imageName":"","url":"./files/pageConfig/2_1.jpg","originalURL":"./files/pageConfig/2_1.jpg"},{"imageName":"","url":"./files/pageConfig/3_1.jpg","originalURL":"./files/pageConfig/3_1.jpg"},{"imageName":"","url":"./files/pageConfig/4_1.jpg","originalURL":"./files/pageConfig/4_1.jpg"},{"imageName":"","url":"./files/pageConfig/5_1.jpg","originalURL":"./files/pageConfig/5_1.jpg"},{"imageName":"","url":"./files/pageConfig/6_1.jpg","originalURL":"./files/pageConfig/6_1.jpg"},{"imageName":"","url":"./files/pageConfig/6-1.jpg","originalURL":"./files/pageConfig/6-1.jpg"},{"imageName":"","url":"./files/pageConfig/7_1.jpg","originalURL":"./files/pageConfig/7_1.jpg"},{"imageName":"","url":"./files/pageConfig/8_1.jpg","originalURL":"./files/pageConfig/8_1.jpg"},{"imageName":"","url":"./files/pageConfig/9_1.jpg","originalURL":"./files/pageConfig/9_1.jpg"},{"imageName":"","url":"./files/pageConfig/10_1.jpg","originalURL":"./files/pageConfig/10_1.jpg"},{"imageName":"","url":"./files/pageConfig/11_1.jpg","originalURL":"./files/pageConfig/11_1.jpg"},{"imageName":"","url":"./files/pageConfig/12_1.jpg","originalURL":"./files/pageConfig/12_1.jpg"},{"imageName":"","url":"./files/pageConfig/13_1.jpg","originalURL":"./files/pageConfig/13_1.jpg"},{"imageName":"","url":"./files/pageConfig/15_1.jpg","originalURL":"./files/pageConfig/15_1.jpg"},{"imageName":"","url":"./files/pageConfig/16_1.jpg","originalURL":"./files/pageConfig/16_1.jpg"},{"imageName":"","url":"./files/pageConfig/17_1.jpg","originalURL":"./files/pageConfig/17_1.jpg"},{"imageName":"","url":"./files/pageConfig/18_1.jpg","originalURL":"./files/pageConfig/18_1.jpg"},{"imageName":"","url":"./files/pageConfig/19_1.jpg","originalURL":"./files/pageConfig/19_1.jpg"},{"imageName":"","url":"./files/pageConfig/20_1.jpg","originalURL":"./files/pageConfig/20_1.jpg"}]},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202461311414576","alpha":"1","mouseOverEffect":"2","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.23569023569023564","y":"0.6376262626262624","width":"0.5536616161616159","height":"0.23442760942760937","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"1296","pageHeight":"864"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"1671","imgOriginalHeight":"477","url":"./files/pageConfig/Kaustav Roy Media Works And Prints ADV.png","originalURL":"./files/pageConfig/Kaustav Roy Media Works And Prints ADV.png","effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]}; bookConfig.isFlipPdf=false; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}