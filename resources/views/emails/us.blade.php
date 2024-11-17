<!DOCTYPE html>
<html>
<head>
    <title>Email Received</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            background-color: #ffffff;
            margin: 50px auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            text-align: center;
        }
        .email-header {
            background-color: #4CAF50;
            color: #ffffff;
            padding: 10px 0;
            border-radius: 8px 8px 0 0;
        }
        .email-body {
            padding: 20px;
        }
        .email-footer {
            font-size: 12px;
            color: #777;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>Email Received</h1>
        </div>
        <div class="email-body">
            <p>Name: <?php echo $name; ?></p>
            <p>Message: <?php echo $messag; ?></p>
            <p>Email: <?php echo $email; ?></p>
        </div>
        <div class="email-footer">
            <p>&copy; 2024 Global Talent Solutions. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
