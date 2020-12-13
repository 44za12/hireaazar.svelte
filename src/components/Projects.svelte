<script>
import { Col, Container, Row } from "sveltestrap";
</script>

<Container class="mt-5 mb-5 text-left">
    <div class="heading mb-5">
    <h4 id="projects">Below you can find some of my projects segregated by the language they are written in.</h4>
    </div>
    <h4 class="mb-4 text-left" id="python">Python Projects</h4>
    <Row>
        <Col>
            <div class="card border-success bg-transparent mb-5">
                <div class="card-header aazar-bg-2">
                  Face ID For Mac
                </div>
                <div class="card-body">
                  <p class="card-text">Like the name suggests I implemented an iOS' Face ID like functionality in MacOS.</p>
                  <a href="/" class="btn border-success aazar-bg-primary" disabled>Private</a>
                </div>
                <div class="card-footer">
                    Library Used: OpenCV
                </div>
            </div>
        </Col>
        <Col>
            <div class="card border-success bg-transparent mb-5">
                <div class="card-header aazar-bg-2">
                  ClapTube
                </div>
                <div class="card-body">
                  <p class="card-text">A small but powerful tool which opens your favourite youtube videos if it hears you clap!</p>
                  <a href="https://github.com/44za12/ClapTube" class="btn border-success aazar-bg-primary" target="_blank">Check here!</a>
                </div>
                <div class="card-footer">
                    Library Used: PyAudio
                </div>
            </div>
        </Col>
        <Col>
            <div class="card border-success bg-transparent mb-5">
                <div class="card-header aazar-bg-2">
                  Covid19 Tracker / Predictor
                </div>
                <div class="card-body">
                  <p class="card-text">Built to help Predict the number of COVID19 cases and for better data visualisation.</p>
                  <a href="http://www.covid19impact.in" class="btn border-success aazar-bg-primary" target="_blank">Check here!</a>
                </div>
                <div class="card-footer">
                    Library Used: SciPy
                </div>
            </div>
        </Col>
        <Col>
            <div class="card border-success bg-transparent mb-5">
                <div class="card-header aazar-bg-2">
                  PyGodBot
                </div>
                <div class="card-body">
                  <p class="card-text">Built a telegram bot to automate some boring stuff and to serve as a Virtual Assistant back in 2018.</p>
                  <a href="/" class="btn border-success aazar-bg-primary" disabled>Private</a>
                </div>
                <div class="card-footer">
                    Library Used: Telepot
                </div>
            </div>
        </Col>
    </Row>
    <h4 class="mb-4 mt-4 text-left" id="golang">Golang Projects</h4>
    <Row>
        <Col>
            <div class="card border-success bg-transparent mb-5">
                <div class="card-header aazar-bg-2">
                  Innocent Siri
                </div>
                <div class="card-body">
                  <p class="card-text">One of a kind virtual assistant that doesn't steal your data and yet gets the work done! I figured out a way to convert speech to text locally without making any server requests and then to process commands gotten from the speech. </p>
                  <a href="https://youtu.be/kzKcD6NYryA" class="btn border-success aazar-bg-primary" target="_blank">Check here!</a>
                </div>
                <div class="card-footer">
                    Library Used: Many
                </div>
            </div>
        </Col>
    </Row>
    <h4 class="mb-4 mt-4 text-left" id="javascript">Javascript Projects</h4>
    <Row>
        <Col>
            <div class="card border-success bg-transparent mb-5">
                <div class="card-header aazar-bg-2">
                  Msorrywhat!?
                </div>
                <div class="card-body">
                  <p class="card-text">A cool tool which listens to your online meetings and notifies you on your phone whenever your name / or any other thing pre defined by you is heard.</p>
                  <a href="https://44za12.github.io/msorrywhat" class="btn border-success aazar-bg-primary" target="_blank">Check here!</a>
                </div>
                <div class="card-footer">
                    Library Used: IFTTT, BrowserSpeechToText
                </div>
            </div>
        </Col>
    </Row>
</Container>

<style>

</style>