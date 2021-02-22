## Notes on Website Customisation
### Background Colour
Background image is added to the home section in index.html so the tag appears as follows:
```
<section class="home" style="background: url(images/bg/img-bg1.jpg); background-size: cover">
```

Alternatively, it is possible to remove the background image (by removing `style="background: url(images/bg/img-bg1.jpg); background-size: cover"` from the tag about) and modifying the `background-color` for overlay in css/style.css

### Article Popup
To load and show the popup modal with an article/ html page, add the follow attributes to your button/ a tag:
```
onclick="loadSite('YOUR_HTML_PAGE.html')" class="btn btn-info btn-lg" data-toggle="modal" data-target="#article-modal"
```
(Change `YOUR_HTML_PAGE.html` to your html file)

### Change bar size

Change the bar height (and font size) by changing the CSS page (css/style.css) in the following places:
```
    .style2 .inline-menu li {
        color: #FFF;
        // edit these two for changing the bar before clicking
        // file line ~740
        font-weight: 42px; //makes x bigger
        line-height: 500px; //makes bar bigger
    }

    ...

    .style2.dark .inline-menu li {
        color: #666;
        //edit these two for changing the bar after clicking
        // file line ~752
        font-weight: 42px; //makes x bigger
        line-height: 500px; //makes bar bigger
    }

    ...

    @media (max-width:1024px) {
        ...

        .inline-menu-container {
            // edit font-size for mobile
            // file line ~2352
            font-size: 14px; //makes x bigger
            right: 10px;
            width: 69%;
        }

        ...
    }
```