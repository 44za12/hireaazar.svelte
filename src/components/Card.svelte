<script>
    import {Card, CardBody, CardFooter, CardHeader, CardText, CardTitle} from 'sveltestrap';
    export let title;
    export let body = "Hey Aazar!";
    export let size = 12;
</script>

<Card class="aazar-bg-2 mb-3 col-{size}">
    <CardHeader>
        <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardBody>
        <CardText>
            {body}
        </CardText>
    </CardBody>
    <CardFooter>
        I'm out
    </CardFooter>
</Card>

<style>

</style>