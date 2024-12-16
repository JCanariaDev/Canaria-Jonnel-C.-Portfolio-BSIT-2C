generate();
function generate() {
    let homeHTML = '';
  
    homeHTML += `
        <header>
            

            <h2 class="name"><img src="images/my_logo.webp" width="55px" height="55px" style="border-radius: 50%;" alt="This is my wallpaper"><span class="sub_name">&nbsp;onnel C. Canaria</span></h2>      
            <a class="hamburger"> &#9776;</a>
            <a class="side" href="index.html" class="active">Home</a>
            <a class="side" href="skills.html">Skills</a>
            <a class="side" href="hobbies.html">Hobbies</a>
            <a class="side" href="exp.html">Experience</a>
            <a class="side" href="about.html">About</a>
            <a class="side" href="gallery.html">Gallery</a>
            <nav class="nav-links">
                
                <a href="index.html" class="active">Home</a>
                <a href="skills.html">Skills</a>
                <a href="hobbies.html">Hobbies</a>
                <a href="exp.html">Experience</a>
                <a href="about.html">About</a>
                <a href="gallery.html">Gallery</a>
            </nav>
              
        </header>
                     
        <section class="home">
                <div class="wallpaper">
                    <img src="images/my_profile.jpg" alt="This is my wallpaper">
                </div>
                <div class="box">
                    <div class="content">
                        <h1>Hi I'm <span class="myName">Jonnel</span></h1>
                        <h3 class="typing-text">I'm a <span></span></h3>
                        <p class="semi-motto">I am committed to learning and growing through both experience and challenges. When faced with mistakes, I use them as opportunities to improve and become a better version of myself, bringing greater value to your business. </p>
                        <div class="social-media">
                            <a href="#" id="linkedinLink"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="#" id="githubLink"><i class="fa-brands fa-github"></i></a>
                            <a href="#" id="facebookLink"><i class="fa-brands fa-facebook"></i></a>
                        </div>
                        <a href="exp.html" class="button">My Experience</a>
                    </div>
                </div>
        </section>
    `;

    document.querySelector('.body').innerHTML = homeHTML;
}


