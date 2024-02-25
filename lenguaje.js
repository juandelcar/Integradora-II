function changeLanguage(language) {
    var currentUrl = window.location.href;
    var newUrl;

    if (language === 'es') {
        newUrl = currentUrl.replace(/(_en|_fr)?\.html/, '.html');
    } else if (language === 'en') {
        newUrl = currentUrl.replace(/(_es|_fr)?\.html/, '_en.html');
    } else if (language === 'fr') {
        newUrl = currentUrl.replace(/(_es|_en)?\.html/, '_fr.html');
    }

    window.location.href = newUrl;
}