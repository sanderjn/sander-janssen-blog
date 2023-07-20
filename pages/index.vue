<template>
    <div>
        <!-- <Skew /> -->
        <main class="z-10 content">
            <div class="prose prose-sm md:prose">
                <h1 class="inline-block px-4 -ml-4 !my-0">
                    <span>👋🏻 Hi, I'm </span>
                    <br class="md:hidden" />
                    <span>Sander Janssen</span>
                </h1>
                <p
                    class="block font-mono text-lg md:text-xl text-primary-600 !mt-3"
                >
                    Front-end web developer
                </p>
            </div>
            <div class="mt-10">
                <div class="prose prose-sm md:prose max-w-none">
                    <p>
                        I've got 10+ years of experience in building fast and
                        user friendly
                        <nuxtLink to="/portfolio"
                            >websites that convert</nuxtLink
                        >.
                    </p>
                    <h2>Work with me on</h2>
                    <ul>
                        <li v-for="skill in skills">{{ skill }}</li>
                    </ul>
                </div>
                <WorkBanner />
                <div class="mt-10 prose prose-sm md:prose max-w-none">
                    <h2>More about me</h2>
                    <p>
                        When I'm not building websites, I'm probably spending my
                        time:
                    </p>
                    <ul>
                        <li v-for="hobby in hobbies">{{ hobby }}</li>
                    </ul>

                    <p>
                        Also, I love music (disco/house/electronic) and I spend
                        a large amount of my free time looking for new music to
                        use in my DJ sets, which you can check out on
                        <svg
                            class="inline w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                        <a
                            href="https://soundcloud.com/sanderjanssen"
                            target="_blank"
                            class="hover:text-primary-500"
                            >SoundCloud</a
                        >.
                    </p>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import WorkBanner from "~/components/WorkBanner.vue";

export default {
    data() {
        return {
            logos: [
                "kleinstesoepfabriek",
                "boonstra",
                "worldnauticcenter",
                "worck",
                "smaakgroenten",
                "zweedsepellets.png",
            ],
            skills: [
                "Website consultancy",
                "Front-end web development",
                "WordPress development",
                "Conversion Rate Optimization",
                "UX design",
            ],
            hobbies: [
                "🏄🏻‍♂️ Surfing",
                "🤖 Playing with AI",
                "🎧 Listening to a podcast",
            ],
        };
    },
    head() {
        return {
            title: this.title,
            bodyAttrs: {
                class: "home",
            },
        };
    },
    components: {
        WorkBanner,
    },
};
</script>

<style></style>
