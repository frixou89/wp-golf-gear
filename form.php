<form class="wp-golfcp">
    <fieldset>
    	<div class="wp-golfcp-control-group">
   			<label for="golfcp-gender-input">Gender</label>
           	<select class="golfcp-gender-input">
              <option value="" selected="selected"></option>
           		<option><?php _e('Male', 'golfcp') ?></option>
          		<option><?php _e('Female', 'golfcp') ?></option>
           	</select>
       </div>
	    <div class="wp-golfcp-control-group">
	    	<label for="golfcp-height-input"><?php _e('Height', 'golfcp') ?></label>
          <select class="golfcp-height-input">
              <option value=""></option>
              <option value="4.10">4' 10"</option>
              <option value="4.11">4' 11"</option>
              <option value="5">5'</option>
              <option value="5.1">5' 1"</option>
              <option value="5.2">5' 2"</option>
              <option value="5.3">5' 3"</option>
              <option value="5.4">5' 4"</option>
              <option value="5.5">5' 5"</option>
              <option value="5.6">5' 6"</option>
              <option value="5.7">5' 7"</option>
              <option value="5.8">5' 8"</option>
              <option value="5.9">5' 9"</option>
              <option value="5.10">5' 10"</option>
              <option value="5.11">5' 11"</option>
              <option value="6">6'</option>
              <option value="6.1">6' 1"</option>
              <option value="6.2">6' 2"</option>
              <option value="6.3">6' 3"</option>
              <option value="6.4">6' 4"</option>
              <option value="6.5">6' 5"</option>
              <option value="6.6">6' 6"</option>
              <option value="6.7">6' 7"</option>
              <option value="6.8">6' 8"</option>
              <option value="6.9">6' 9"</option>
           </select>
       </div>
       <div class="wp-golfcp-control-group">
 			    <label for="golfcp-wristtofloor-input"><?php _e('Wrist To Floor', 'golfcp') ?></label>
          <select class="golfcp-wristtofloor-input">
              <option value=""></option>
              <option value="40">40"</option>
              <option value="39.5">39 1/2"</option>
              <option value="39">39"</option>
              <option value="38.5">38 1/2"</option>
              <option value="38">38"</option>
              <option value="37.5">37 1/2"</option>
              <option value="37">37"</option>
              <option value="36.5">36 1/2"</option>
              <option value="36">36"</option>
              <option value="35.5">35 1/2"</option>
              <option value="35">35"</option>
              <option value="34.5">34 1/2"</option>
              <option value="34">34"</option>
              <option value="33.5">33 1/2"</option>
              <option value="33">33"</option>
              <option value="33.5">32 1/2"</option>
              <option value="32">32"</option>
              <option value="31.5">31 1/2"</option>
              <option value="31">31"</option>
              <option value="31.5">30 1/2"</option>
              <option value="30">30"</option>
              <option value="29.5">29 1/2"</option>
              <option value="29">29"</option>
           </select>
       </div>
        <div class="wp-golfcp-control-group">
          <label for="golfcp-glove-size-input"><?php _e('Glove Size', 'golfcp') ?></label>
          <select class="golfcp-glove-size-input">
            <option value=""></option>
            <option value="Extra Large">Extra Large</option>
            <option value="Cadet Extra Large">Cadet Extra Large</option>
            <option value="Large">Large</option>
            <option value="Cadet Large">Cadet Large</option>
            <option value="Medium Large">Medium Large</option>
            <option value="Cadet Medium Large">Cadet Medium Large</option>
            <option value="Medium">Medium</option>
            <option value="Cadet Medium">Cadet Medium</option>
            <option value="Small">Small</option>
            <option value="Cadet Small">Cadet Small</option>
         </select>
       </div>

   </fieldset>

   <div class="golfcp-results">
    <div class="golfcp-result">
      <label for="golfcp-club-length-result"><?php _e('Club Length', 'golfcp') ?></label>
      <input class="golfcp-club-length-result" disabled="disabled" value=""></input>
    </div>

    <div class="golfcp-result">
      <label for="golfcp-lie-angle-result"><?php _e('Lie Angle', 'golfcp') ?></label>
      <input class="golfcp-lie-angle-result" disabled="disabled" value=""></input>  
    </div>
    
    <div class="golfcp-result">
      <label for="golfcp-grip-size-result"><?php _e('Grip Size', 'golfcp') ?></label>
      <input class="golfcp-grip-size-result" disabled="disabled" value=""></input>
    </div>

  </div>

</form>