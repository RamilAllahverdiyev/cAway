const APP_ID = "1249b492c363441284bae598b792b1ac";
const CHANNEL = "main";
const TOKEN =
	"0061249b492c363441284bae598b792b1acIAAsM/hjLgkJawsx9Xyiug3Vu56ueBenp/9DkpSu49mh+2TNKL8AAAAAEACOhaHH2UzoYgEAAQDZTOhi";
let UID;

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

let localTracks = [];
let remoteUsers = {};

let joinAndDisplayLocalStream = async () => {
   UID =  await client.join(APP_ID, CHANNEL, TOKEN, null)

   localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()
   let player = `<div class="video-container" id="user-container-${UID}">
   <div class="username-wrapper"><span id="user-name">My name</span></div>
   <div class="video-player" id="user-${UID}"></div>
</div>`
  document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)

  localTracks[1].play(`user-${UID}`)

  await client.publish(localTracks[0], localTracks[1])

}

joinAndDisplayLocalStream()
