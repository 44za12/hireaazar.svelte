<script>
import {Col, Container, Row, Progress} from 'sveltestrap';
</script>
<Container class="mt-5 mb-5 text-center">
    <div class="heading mb-4 mt-2">
    <h4>You can find some of my skills below.</h4>
    </div>
    <Row>
        <Col>
            <h5 class="text-left">Python (Scripting / Automation / Problem Solving)</h5>
            <Progress animated color="success" value= {85} class="mt-2 mb-2" />
            <h5 class="text-left">Flask / Rest API</h5>
            <Progress animated color="success" value= {80} class="mt-2 mb-2" />
            <h5 class="text-left">Cloud Computing (PAAS / IAAS)</h5>
            <Progress animated color="success" value= {77} class="mt-2 mb-2" />
            <h5 class="text-left">Datastructures and algorithms</h5>
            <Progress animated color="success" value= {75} class="mt-2 mb-2" />
            <h5 class="text-left">Golang</h5>
            <Progress animated color="success" value= {70} class="mt-2 mb-2" />
            <h5 class="text-left">Javascript</h5>
            <Progress animated color="success" value= {75} class="mt-2 mb-2" />
            <h5 class="text-left">Machine Learning</h5>
            <Progress animated color="success" value= {70} class="mt-2 mb-2" />
            <h5 class="text-left">Frontend (Svelte and VueJS)</h5>
            <Progress animated color="success" value= {40} class="mt-2 mb-2" />
        </Col>
    </Row>
</Container>
<style>

</style>