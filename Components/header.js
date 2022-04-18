function headd(){
    return `
    <span id="toggle-nav" onclick="toggleNav()" style="margin-right: 50px;">
    <i class="fa fa-bars" style="text-align: end;"></i>
</span>
<ul id="navlist">
    <li><img src="Assets/Images/logo.png" alt="lumen5 logo"></li>
    <li id="space"> </li>
    <li>
        <div class="dropdown">
            <button class="dropbtn">Create</button>
            <div class="dropdown-content">
                <a href="pagesInsideCreate/photo-video-maker.html">Photo_Video_Maker</a>
                <a href="pagesInsideCreate/facebook-video-maker.html">Facebook_Video_Maker</a>
                <a href="pagesInsideCreate/youtube-intro-maker.html">YouTube_Intro_Maker</a>
                <a href="pagesInsideCreate/instagram-video-maker.html">Instagram_Video_Maker</a>
                <a href="pagesInsideCreate/instagram-story-maker.html">Instagram_Story_Maker</a>
                <a href="pagesInsideCreate/promo-video-maker.html">Promo_Video_Maker</a>
                <a href="pagesInsideCreate/video-ad-maker.html">Video_Ad_Maker</a>
                <a href="pagesInsideCreate/marketing-video-maker.html">Marketing_Video_Maker</a>
                <a href="pagesInsideCreate/linkedin-video-maker.html">LinkedIn_Video_Maker</a>
                <a href="pagesInsideCreate/business-video-maker.html">Business_Video_Maker</a>
                <a href="pagesInsideCreate/ecommerce-video-maker.html">Ecommerce_Video_Maker</a>
                <a href="pagesInsideCreate/explainer-video-maker.html">Explainer_Video_Maker</a>
                <a href="pagesInsideCreate/slideshow-maker.html">Slideshow_Maker</a>
                <a href="pagesInsideCreate/education-video-maker.html">Education_Video_Maker</a>
            </div>
        </div>
    </li> 
    <li><a href="./price.html">Pricing</a></li>
    <li><a href="demo_enterprises.html">Enterprise</a></li>
    <li><a href="case_study.html">Case studies</a></li>
    <!-- ! To Complete Learn-->
    <li>
        <div class="dropdown">
        <button class="dropbtn">Learn</button>
        <div class="dropdown-content">
            <a href="#">Resources</a>
            <a href="#">Blog</a>
        </div>
        </div>
    </li>
    <li><a id = "login" href="login.html">Login</a></li>
    <li><a class="signup" href="signup.html">Signup</a></li>
</ul>
`
}
export default headd;