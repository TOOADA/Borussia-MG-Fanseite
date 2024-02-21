<script>
	import Button from './Button.svelte'
</script>

<svelte:head>
    <title>Hauptseite</title>
</svelte:head>

<style>
    @import './css/themeswitch.css';

	:global(body) {
        background-color: white;
		color: black;
		transition: background-color 0.5s
	}
	:global(body.dark-mode) {
		background-color: rgb(34, 36, 36);
		color: white;
	}

    form {
		align-content: center;
	}

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
    }

    .footer {
    
    position: absolute;
    bottom: 0;
  }

    .flex-container {
      flex-direction: row;
      display: flex;
      flex-wrap: nowrap;
      background-color: transparent;
      justify-content: center;
    }
    
    .flex-container > div {
      background-color: #333333;
      width: 125px;
      margin: 10px;
      text-align: center;
      font-size: 25px;
      font-style: italic;
      font-family: Arial, Helvetica, sans-serif;
    }

    .flex-container p {
      color: white;
    }

    .flex-container img {
      width: 80%;
      margin-bottom: 8%;
    }
</style>

<body>
<h1>Real Madrid - Projektarbeit</h1>

<Button>
	Themeswitch
</Button>
<div class="footer">
    <div class="flex-container">
        <div>
            <p>
                Enna:
            </p>
            <a href="https://github.com/TOOADA"><img src="https://avatars.githubusercontent.com/u/128263730?v=4" alt="Enna's Github Profilbild"/></a>
        </div>
        <div>
            <p>
                Noah:
            </p>
            <a href="https://github.com/TOOADA"><img src="https://avatars.githubusercontent.com/u/128263730?v=4" alt="Noah's Github Profilbild"/></a>
        </div>
    </div>
</div>
</body>
