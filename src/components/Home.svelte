<script>
    import {Col, Container, Row, Card} from 'sveltestrap';
</script>
<Container class="mt-5">
    <Row>
        <Col class="text-center">
            <div class="mb-5 mt-2 hero">
                <h1>Hi, I'm Aazar!</h1>
                <p>A 23 years old High School Topper, School Dropout, Self-Taught Back-End Developer who holds Rank 1 in Python on Hackerrank (Among ~3000 other python developers around the globe)! I've created this website for you to find me easily and to showcase some of my skills...</p>
            </div>
            <div class="heading mb-5 mt-2">
                <h4>Currently I work with the below languages.</h4>
            </div>
            <Row>
                <Col>
                    <Card body class="aazar-bg-primary mb-2 text-center border-success bg-transparent">
                        <a href="#python">Python</a>
                    </Card>
                </Col>
                <Col>
                    <Card body class="aazar-bg-primary mb-2 text-center border-success bg-transparent">
                        <a href="#golang">Golang</a>
                    </Card>
                </Col>
                <Col>
                    <Card body class="aazar-bg-primary mb-2 text-center border-success bg-transparent">
                        <a href="#javascript">Javascript</a>
                    </Card>
                </Col>
            </Row>
        </Col>
    </Row>
</Container>
<style>
    a {
        color: green;
    }
    a:hover{
        color: green;
        text-decoration: underline;
    }
    .hero {
        border: double;
        border-radius: 1rem;
        border-color: green;
        padding-top: 2rem;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 2rem;
    }
</style>