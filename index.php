<?php
header("Cache-Control: no-cache, must-revalidate");
require(isset($_GET['static']) ? 'static.html' : 'dynamo.html');
