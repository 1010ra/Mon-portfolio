let animations = ['rejection'];
        var len = animations.length;
        for (let i = 0; i < len; i += 1) {
            var anim;
            var elem = document.getElementById(animations[i]);
            if (elem) {
                var animData = {
                    container: elem,
                    renderer: 'svg',
                    loop: true,
                    rendererSettings: {
                        progressiveLoad: true,
                        preserveAspectRatio: 'xMidYMid meet'
                    },
                    path: 'https://labs.nearpod.com/bodymovin/demo/al_boardman/articulation/' + animations[i] + '.json'
                };
                anim = lottie.loadAnimation(animData);
                anim.setSubframe(false);
            } else {
                console.error('Element not found for id:', animations[i]);
            }
        }

        