window.addEventListener('keydown', function(e){
	const key = document.querySelector(`.pad[data-key="${e.keyCode}"]`);
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

	if(!key) return;
	if(!audio) return;

	audio.currentTime = 0;
	audio.play();

	key.classList.add('active');

	audio.addEventListener('ended', ()=>{
		key.classList.remove('active');
	});
});