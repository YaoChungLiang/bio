const commandInput = document.getElementById('command');
const outputDiv = document.querySelector('.output');

const commands = {
  help: `
Available commands:
- help: Show this help message
- about: Learn more about me
- projects: See my work
- clear: Clear the screen
  `,
  about: `I'm a web developer who likes making terminal-style sites!`,
  projects: `1. Terminal Site\n2. Cool Game\n3. Blog (coming soon)`,
};

commandInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const input = commandInput.value.trim();
    outputDiv.innerHTML += `\n$ ${input}\n`;

    if (input === 'clear') {
      outputDiv.innerHTML = '';
    } else if (commands[input]) {
      outputDiv.innerHTML += `${commands[input]}\n`;
    } else {
      outputDiv.innerHTML += `Command not found: ${input}\n`;
    }

    commandInput.value = '';
    window.scrollTo(0, document.body.scrollHeight);
  }
});

