<template>
    <div
        class="w-full min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-100"
    >
        <Chat />
        <Header />
        <div class="container relative flex-1 py-12 rounded md:py-12">
            <nuxt />
        </div>
        <Footer />
        <!-- Simple Analytics - 100% privacy-first analytics -->
        <script
            async
            defer
            src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
        <noscript
            ><img
                src="https://queue.simpleanalyticscdn.com/noscript.gif"
                alt=""
                referrerpolicy="no-referrer-when-downgrade"
        /></noscript>
    </div>
</template>

<script>
import Chat from "~/components/Chat.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
    components: {
        Chat,
        Header,
        Footer,
    },
};
</script>
