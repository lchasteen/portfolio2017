  <div class="row">
	<div class="span8">
		<div class="page-header"><h1>Send me an email.</h1></div>

		
		<?php
		
		if(isset($_POST['submit'])){
						
			if (!empty($_POST['email']) && !empty($_POST['name']) && !empty($_POST['subject']) &&  !empty($_POST['comment'])){
			  //senemail
				$email = $_POST['email'];
				$name = $_POST['name'];
				$subject = $_POST['subject'];
				$comment = $_POST['comment'];								
				if(mail('lchasteen@gmail.com', $subject, $comment, "From: " . $email)) echo '<div class="alert alert-success">Thanks for responding!</div>';					
					else echo '<div class="alert alert-error">Error sending email! Please try again.</div>';			
			}else echo '<div class="alert alert-error">Fields: Name, Email, Subject, and Comment are required fields!</div>';			
		}
		
		?>
			
			<form class="form-horizontal" method="post"  >					
					
				   <fieldset>
						<div class="control-group">
							<div class="controls">
								<span class="help-block">Here is my information.</span>
							</div>
						</div>
						<div class="control-group">
							
							<label class="control-label" for="location">Location:</label>
							<div class="controls">
							  <input class="input-xlarge disabled" id="location" type="text" placeholder="Athens, Georgia" disabled />
							</div>
						</div>
						<!--<div class="control-group">
							<label class="control-label" for="phone">Phone:</label>
							<div class="controls">
							  <input class="input-xlarge disabled" id="phone" type="text" placeholder="(706) 296-6681 (EST 8am-9pm)" disabled />
							</div>
						</div> -->
						<div class="control-group">
							<div class="controls">
								<span class="help-block">Let me know who you are.</span>
							</div>
						</div>
						<div class="control-group">							
							<label class="control-label" for="name">Name:</label>
								<div class="controls">													
									<input type="text" class="input-xlarge" name="name"/>			  
								</div>													
						</div>
						<div class="control-group">
							<label class="control-label" for="email">Email:</label> 
								<div class="controls">													
									<input type="text" class="input-xlarge" name="email" />			  									
								</div>															
						</div>
						<div class="control-group">
							<label class="control-label" for="subject">Subject:</label>
								<div class="controls">													
									<input type="text" class="input-xlarge"  name="subject"/>							
								</div>				
						</div>
						<div class="control-group">
							<label class="control-label" for="comment">Comment:</label>
								<div class="controls">													
									<textarea class="input-xlarge" cols="30" wrap="virtual"  name="comment"></textarea>							
								</div>				
						</div>
						<div class="control-group">								
								<div class="controls">													
									<button class="btn btn-primary" type="submit" name="submit">Submit</button>
									<button class="btn" type="reset"><i class="icon-refresh"></i>Refresh</button>	
								</div>
						</div>						
				  </fieldset>
			</form>		
			
	</div>	  
  </div>
