const textData = [
    {
        position: 'right',
        classOne: 'inner-text',
        classTwo: 'inner-text right t1',
        textOne: (
            <p style={{ fontWeight: 'bolder' }}>
                I'm a Full Stack Software Engineer...
            </p>
        ),
        textTwo: null,
    },
    {
        position: 'left',
        classOne: 'inner-text left t2',
        classTwo: 'inner-text',
        textOne: (
            <p>
                ...who's a problem solver, I believe in empathy first, I’m a
                strong communicator, a self-starter, an insatiable questioner
                and I absolutely love to build stuff!
            </p>
        ),
        textTwo: (
            <p>
                Since I started to code in March of 2020, everyday has been both
                humbling, and immensely fulfilling. I never in my life thought I
                would get so much joy out of playing with a Python or React
                Library as well as the excitement I get from reading about
                additions into JavaScript's es6...
            </p>
        ),
    },
    {
        position: 'right',
        classOne: 'inner-text',
        classTwo: 'inner-text right t3',
        textOne: (
            <p>
                <i class="fas fa-chevron-down"></i>{' '}
                <i class="fas fa-chevron-down"></i>{' '}
                <i class="fas fa-chevron-down"></i> Technologies 😎{' '}
                <i class="fas fa-chevron-down"></i>{' '}
                <i class="fas fa-chevron-down"></i>{' '}
                <i class="fas fa-chevron-down"></i>
            </p>
        ),
        textTwo: null,
    },
    {
        position: 'left',
        classOne: 'inner-text left t4',
        classTwo: 'inner-text',
        textOne: (
            <p>Python | JavaScript | SQL | React | Redux | Node.js | AWS</p>
        ),
        textTwo: (
            <p>
                Express | GraphQL | Flask | HTML | React-Native | CSS | REST API
            </p>
        ),
    },
    {
        position: 'left',
        classOne: 'inner-text left t5',
        classTwo: 'inner-text',
        textOne: <p>...</p>,
        textTwo: null,
    },
];

export default textData;
