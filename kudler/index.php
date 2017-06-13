
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Lane Chasteen's Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="This is my software developer portfolio site.">
    <meta name="author" content="Lane Chasteen">
	
	<meta name="description" content="Lane Chasteen's Portfolio Site and Resume" />
	<meta name="keywords" content="programmer, java programmer, javascript programmer, html, developer, java, prgrammer, JSP, software, c programmer, software developer, software engineer, programmer portfolio" />
	<meta content="text/html; charset=ISO-8859-1" http-equiv="content-type"/>		
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
    <!-- Le styles -->
    <style type="text/css">
      body {
        padding-top: 60px;
        padding-bottom: 40px;
      }
    </style>
    <link href="assets/css/bootstrap.css" rel="stylesheet">	
	<link rel="stylesheet" type="text/css" href="assets/css/layout.css" />	

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Le fav and touch icons -->
    
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png">
  </head>

  <body>
    <?php include ("pages/nav.php"); ?>
	

    <div class="container">

		<?php 
			
			$page = $_GET["page"];
			
			switch($page){
				case "home":					
					include ("pages/home.php");					
				break;
				case "resume":
					include ("pages/resume.php");					
				break;
				case "portfolio":
					include ("pages/portfolio.php");
				break;
				case "contact":
					include ("pages/contact.php");					
				break;
				
			}
			include ("pages/footer.php");
		?>
		

    </div> <!-- /container -->

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/bootstrap-transition.js"></script>
    <script src="assets/js/bootstrap-alert.js"></script>
    <script src="assets/js/bootstrap-modal.js"></script>
    <script src="assets/js/bootstrap-dropdown.js"></script>
    <script src="assets/js/bootstrap-scrollspy.js"></script>
    <script src="assets/js/bootstrap-tab.js"></script>
    <script src="assets/js/bootstrap-tooltip.js"></script>
    <script src="assets/js/bootstrap-popover.js"></script>
    <script src="assets/js/bootstrap-button.js"></script>
    <script src="assets/js/bootstrap-collapse.js"></script>
    <script src="assets/js/bootstrap-carousel.js"></script>
    <script src="assets/js/bootstrap-typeahead.js"></script>
	<script src="assets/js/page-modify.js"></script>
  </body>
</html>