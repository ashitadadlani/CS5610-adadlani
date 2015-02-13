<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset='utf-8' />

<title>Demo Home Page</title>

<style type="text/css">
    ul.master_navigation
    {
        font-size: 100%;
        font-weight: bold;
        text-align: center;
        list-style: none;
        margin: 0.5em 0;
        padding: 0;
    }

    ul.master_navigation li
    {
        display: inline-block;
        padding: 0 0.5%;
    }

    a
    {
        color: #08f;
        font-weight: bold;
        text-decoration: none;
    }

    a:visited
    {
        color: #88f;
    }

    a:hover
    {
        color: #f00;
    }

    p
    {
        text-align: justify;
    }
</style>

<style type="text/css" media="screen">
    body {
        width:900px;
        max-width: 100%;
        margin: 0;
        padding: 0;
    }

    .pad {
        padding: 10px;
    }
</style>

<style>
    img{
        float: left;
        padding-right: 20px;
    }
    body{
        background-image:url("Default.jpg");

    }
</style>
    

</head>

<body>

<div class="pad">

<form id="form1" runat="server">

<div>

<ul class="master_navigation">
    <li><a href="sitestatistics/" target="_blank">SiteStatistics</a></li>
    <li><a href="statistics/" target="_blank">Statistics</a></li>
    <li><a href="source/" target="_blank">Source</a></li>
    <li><a href="search/" target="_blank">Search</a></li>
    <li><a href="searchtree/" target="_blank">SearchTree</a></li>
    <li><a href="textview/" target="_blank">TextView</a></li>
    <li><a href="filelist.aspx" target="_blank">FileList</a></li>
    <li><a href="autofile.aspx" target="_blank">AutoFile</a></li>
    <li><a href="images/autoimage.aspx" target="_blank">Images</a></li>
    <li><a href="blog/" target="_blank">Blog</a></li>
    <li><a href="story/index.htm?../experiments/story.txt" target="_blank">Experiments</a></li>
    <li><a href="project/" target="_blank">Project</a></li>
    <li><a href="https://github.com/ashitadadlani/CS5610-adadlani" target="_blank">Github</a></li>
</ul>

<hr />
<h1>Ashita Dadlani</h1>
<p style="font-family:cursive"><img src="images/MyImages/Myself.jpg" width="200" height="290" />
    Hi!! Thanks for visiting my page. I am Ashita Dadlani, a Computer Science graduate student 
    at Northeastern University. I joined Northeastern in Fall 2014 and prior to that was working  
    at SAP Labs for approximately 3 years. 
    I have published two papers in my undergraduate school. The first one, 
    <a href="http://ojs.pythonpapers.org/index.php/tppm/article/view/151" target="_blank">Deducto and Color Deducto</a> was 
    a game development project for OLPC. Second paper was on the application of steganography in
     hiding user identity information (IMEI and IMSI numbers) in mobile phone captured images and can be found 
    <a href="http://link.springer.com/chapter/10.1007%2F978-3-642-30157-5_40#page-1" target="_blank">here.</a>
    
</p>

<hr />

    <p style="font-family:cursive">Here is a link to the <a href="story/index.htm" target="_blank">Story Utility</a>
     on this site so that you may explore this tool.</p>

    <hr />
    <p style="font-family:cursive">Here is a link to the <a href="http://www.northeastern.edu/rasala/webstories.htm"
     target="_blank">Web Development Stories</a> so that you may see a good collection of 
     online documentation.</p>

    
</div>

</form>

</div>

</body>
</html>
