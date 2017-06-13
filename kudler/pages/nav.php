	<div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>			
          </a>
          <a class="brand" href="/">Lane Chasteen</a>
          <div class="nav-collapse">
            <ul class="nav">
				<?php
					// Show the selected li as "active" for each nav element that is selected.
					// This is determined by the "page" variable.
					$page = $_GET["page"];			
					switch($page){
						// Home Page
						case "home":
							echo "<li class=\"active\"><a href=\"index.php?page=home\">Home</a></li>";  // Active
							echo "<li><a href=\"index.php?page=resume\">Resume</a></li>";  
							echo "<li><a href=\"index.php?page=portfolio\">Portfolio</a></li>";  
							echo "<li><a href=\"index.php?page=contact\">Contact</a></li>";              
						break;
						// Resume Page
						case "resume":
							echo "<li><a href=\"index.php?page=home\">Home</a></li>";              
							echo "<li class=\"active\"><a href=\"index.php?page=resume\">Resume</a></li>";  // Active
							echo "<li><a href=\"index.php?page=portfolio\">Portfolio</a></li>";  
							echo "<li><a href=\"index.php?page=contact\">Contact</a></li>";              
						break;
						// Portfolio Page
						case "portfolio":
							echo "<li><a href=\"index.php?page=home\">Home</a></li>";              
							echo "<li><a href=\"index.php?page=resume\">Resume</a></li>";  
							echo "<li class=\"active\"><a href=\"index.php?page=portfolio\">Portfolio</a></li>";  // Active
							echo "<li><a href=\"index.php?page=contact\">Contact</a></li>";              
						break;
						// Contact Page
						case "contact":
							echo "<li><a href=\"index.php?page=home\">Home</a></li>";              
							echo "<li><a href=\"index.php?page=resume\">Resume</a></li>";  
							echo "<li class=\"active\"><a href=\"index.php?page=portfolio\">Portfolio</a></li>";  //Active
							echo "<li><a href=\"index.php?page=contact\">Contact</a></li>";              
						break;						
					}	
			  ?>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>
	