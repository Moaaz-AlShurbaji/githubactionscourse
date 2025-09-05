function Greet(name)
{
    return `Hello, ${name}!`;
}

module.exports = Greet;

if(require.main === module)
{
    console.log(Greet("world"));
}
