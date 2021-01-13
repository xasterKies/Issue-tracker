class HelloWorld extends React.Component {
    render() {
        const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
        const helloContinents = Array.from(continents, c => 'Hello $(c)!');
        const message = helloContinents.join(' ');

        return (

        );
    }
}