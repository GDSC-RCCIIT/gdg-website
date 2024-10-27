const data = [
    {
        url: "https://developers.google.com/learn/pathways/solution-ai-gemini-101",
        title: "Getting started with Google AI Studio and the Gemini API using Node.js\n",
        description:
            "Learn how to prototype text-based prompts with Google AI Studio and get started writing your first Gemini API Node.js script.\n",
        playlist: {
            learningActivities: [
                {
                    url: "https://ai.google.dev/gemini-api/docs/ai-studio-quickstart",
                    title: "Google AI Studio quickstart",
                    description:
                        "Get started with the Gemini API through this quickstart guide. This documentation highlights the three types of text prompts available via Google AI Studio including freeform, structured and chat prompts.\n",
                    page: {},
                },
                {
                    url: "https://developers.google.com/codelabs/solutions/ai-gemini-101/codelab-1",
                    title: "Creating text prompts with Google AI Studio and the Gemini API",
                    description:
                        "In this codelab, you will write a variety of prompts using Google AI Studio and real-world scenarios with Gemini. You will learn how three different text-based prompts in Google AI Studio work including freeform prompts, structured prompts and chat prompts.\n",
                    codelab: {},
                },
                {
                    url: "https://developers.google.com/codelabs/solutions/ai-gemini-101/codelab-2",
                    title: "Writing scripts with the Gemini API",
                    description:
                        "In this second codelab, we will write a prompt in Google AI Studio with Gemini and migrate it into a stand-alone script we can run in a NodeJS environment. Our script will leverage the Gemini API to access the Gemini model.\n",
                    codelab: {},
                },
                {
                    url: "https://ai.google.dev/gemini-api/prompts",
                    title: "Gemini API Prompt Examples",
                    description:
                        "Explore example prompts for the Gemini API in Google AI Studio. Browse examples for different use cases and learn how to design your own prompts.\n",
                    page: {},
                },
                {
                    url: "https://developers.google.com/learn/pathways/quizzes/solution-ai-gemini-101",
                    title: "Quiz",
                    description:
                        "Test your knowledge and earn your getting started with Gemini API badge.",
                    quiz: {
                        badge: {
                            title: "Getting started with Google AI Studio, Gemini AI and NodeJS.",
                            description:
                                "Completed the 'Getting started with Google AI Studio, Gemini AI and NodeJS' learning pathway and quiz",
                            imageUrl:
                                "/static/profile/badges/playlists/solutions/ai-gemini-101/badge.svg",
                            sharing: {
                                title: "Achievement unlocked! I learned about Google AI Studio, Gemini AI and NodeJS. Check it out! #DevBadges",
                                description:
                                    "Earn this badge when you complete the 'Getting started with Google AI Studio, Gemini AI and NodeJS' learning pathway and quiz.",
                                imageUrl:
                                    "/static/profile/badges/playlists/solutions/ai-gemini-101/share.png",
                                imagePath:
                                    "developers.google.com/static/profile/badges/playlists/solutions/ai-gemini-101/share.png",
                            },
                            url: "https://developers.google.com/profile/badges/playlists/solutions/ai-gemini-101",
                            imagePath:
                                "developers.google.com/static/profile/badges/playlists/solutions/ai-gemini-101/badge.svg",
                        },
                    },
                },
            ],
        },
    },
    {
        url: "https://developers.google.com/learn/pathways/solution-ai-gemini-getting-started-android",
        title: "Getting started with the Gemini API and Android\n",
        description:
            "Learn how to use the Gemini API and the Google AI SDK to prototype generative AI in Android applications.\n",
        playlist: {
            learningActivities: [
                {
                    url: "https://developers.google.com/learn/pathways/solution-ai-gemini-101",
                    title: "Introduction to the Gemini API and prompt engineering\n",
                    description:
                        '\u003cp\u003e\n  Explore Google AI Studio and the capabilities of the Gemini generative AI\n  model. Learn how to design and test the different types of prompts (freeform,\n  structured, and chat) and get an API key for the Gemini API.\n\u003c/p\u003e \u003cp\u003e\n  Note that \u003cb\u003ethe Google AI client SDK for Android is only for\n  \u003ci\u003eprototyping\u003c/i\u003e\u003c/b\u003e and exploring the Gemini generative AI models.\n  For use cases beyond prototyping (especially production or\n  enterprise-scale apps), use\n  \u003ca\n    href="https://firebase.google.com/docs/vertex-ai"\n    data-label="path: https://firebase.google.com/docs/vertex-ai"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\u003e\n    Vertex AI in Firebase\n  \u003c/a\u003e\n  instead.\u003c/b\u003e It offers an SDK for Android that has additional security features,\n  support for large media file uploads, and streamlined integrations into the\n  Firebase and Google Cloud ecosystem.\n\u003c/p\u003e \u003cp\u003e\n  This pathway can be useful for further experimentation with the Gemini API and\n  lays the groundwork for integrating its features into your application.\n  Optionally, you can also try out the API using a simple NodeJS web\n  application. If you don\'t already have NodeJS and NPM on your machine, feel\n  free to skip this step and return back to Android in this pathway.\n\u003c/p\u003e\n',
                    playlist: {},
                },
                {
                    url: "https://www.youtube.com/watch?v=L2ORMj0yak8",
                    title: "Build your own generative AI powered Android app\n",
                    description:
                        '\u003cp\u003e\n  Watch this talk from Google I/O 2024 to learn how to add generative AI to your\n  Android app using the Gemini API.\n\u003c/p\u003e \u003cp\u003e\n  Explore use cases for generative AI in mobile apps and learn how to get\n  started with the Gemini API and the Google AI client SDK on Android.\n\u003c/p\u003e \u003cp\u003e\n  \u003cb\u003eThe Google AI client SDK for Android is only for \u003ci\u003eprototyping\u003c/i\u003e.\u003c/b\u003e\n  There are\n    \u003ca\n      href="https://ai.google.dev/gemini-api/docs/api-key#security"\n      data-label="path: https://ai.google.dev/gemini-api/docs/api-key#security"\n      data-category="devsite-playlist: content link"\n      class="gc-analytics-event"\n      \u003eadditional security considerations\u003c/a\n    \u003e\n  for using the Gemini API key in your mobile client applications since\n  you\'re risking exposing this API key to malicious actors if it\'s embedded or\n  retrieved by your client application. So, for use cases beyond prototyping\n  (especially production and enterprise-scale apps),\n  \u003ca\n    href="https://firebase.google.com/docs/vertex-ai/migrate-to-vertex-ai?platform=android"\n    data-label="path: https://firebase.google.com/docs/vertex-ai/migrate-to-vertex-ai?platform=android"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003emigrate to Vertex AI in Firebase\u003c/a\n  \u003e\n  to call the Gemini API directly from your client app. Alternatively, you can\n  access the Gemini models server-side through\n  \u003ca\n    href="https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/overview"\n    data-label="path: https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/overview"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eVertex AI\u003c/a\n  \u003e.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://ai.google.dev/gemini-api/docs/quickstart",
                    title: "Introduction to the Google AI client SDK for Android\n",
                    description:
                        '\u003cp\u003e\n  For mobile apps, you need to consider whether you want to use generative AI\n  with a remote, cloud-based model or a local, on-device model. Take into\n  consideration such factors as network dependency, the size of the model you\n  want to use, cost, and privacy when choosing your approach.\n\u003c/p\u003e \u003cp\u003e\n  This solution focuses on using the Google AI client SDK for Android to\n  remotely access the\n  \u003ca\n    href="https://ai.google.dev/gemini-api/docs"\n    data-label="path: https://ai.google.dev/gemini-api/docs"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eGoogle AI Gemini API\u003c/a\n  \u003e\n  for generative AI. This approach features the following:\n\u003c/p\u003e \u003cul\u003e\n  \u003cli\u003e\n    Is network-dependent and sends data to the cloud for processing access.\n  \u003c/li\u003e\n  \u003cli\u003e\n    Provides native Kotlin and Java SDK and does not require working directly\n    with REST APIs or custom server-side integrations.\n  \u003c/li\u003e\n\n  \u003cli\u003e\n    Runs on Google\'s servers, providing access to larger and more performant\n    models without any device or hardware dependencies.\n  \u003c/li\u003e\n\n  \u003cli\u003e\n    Easy access to the latest improvements in Google\'s automatically updated\n    models.\n  \u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e\n  Getting started with the Google AI client SDK for Android requires setting up\n  a project in Google AI Studio to obtain an API key for the Gemini API. Next,\n  add the required dependencies to your app\'s build configuration, initialize\n  the model that best fits your use case and submit a prompt to generate output.\n\u003c/p\u003e \u003cp\u003e\n  If you want to use the alternative on-device approach, see the next step which\n  covers\n  \u003ca\n    href="https://developer.android.com/ai/gemini-nano/"\n    data-label="path: https://developer.android.com/ai/gemini-nano/"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eGemini Nano using the Google AI Edge SDK\u003c/a\n  \u003e.\n\u003c/p\u003e \u003cp\u003e\n  \u003cb\u003eThe Google AI client SDK for Android is only for \u003ci\u003eprototyping\u003c/i\u003e.\u003c/b\u003e\n  For use cases beyond prototyping (especially production and enterprise-scale apps),\n  \u003ca\n    href="https://firebase.google.com/docs/vertex-ai/migrate-to-vertex-ai?platform=android"\n    data-label="path: https://firebase.google.com/docs/vertex-ai/migrate-to-vertex-ai?platform=android"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003emigrate to Vertex AI in Firebase\u003c/a\n  \u003e\n  to call the Gemini API directly from your client app. Alternatively, you can\n  access the Gemini models server-side through\n  \u003ca\n    href="https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/overview"\n    data-label="path: https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/overview"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eVertex AI\u003c/a\n  \u003e.\n\u003c/p\u003e \u003cp\u003e\n  If you use Android Studio, you can quickly get started with the Gemini API\n  template that\'s described in more detail in a later step.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://developer.android.com/ai/gemini-nano/experimental",
                    title: "Access Gemini Nano on-device with the Google AI Edge SDK (experimental)\n",
                    description:
                        '\u003cp\u003e\n  The alternative approach to using the Google AI client SDK to access the\n  Gemini API is using an on-device AI model such as\n  \u003ca\n    href="https://developer.android.com/ai/gemini-nano"\n    data-label="path:https://developer.android.com/ai/gemini-nano"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eGemini Nano powered by Android AICore through the Google AI Edge SDK for\n    Android\u003c/a\n  \u003e.\n\u003c/p\u003e \u003cp\u003e\n  Instead of calling a remote service that provides access to a generative AI\n  model, the prompts are processed by a model that is stored on the device\n  itself. This option removes the dependency on network access and completes all\n  processing on-device. Consider this approach for potential cost-savings,\n  offline access, smaller and narrower tasks, as well as local processing of\n  sensitive data for your app.\n\u003c/p\u003e \u003cp\u003e\n  Gemini Nano is available for experimental access using the Google AI Edge\n  SDK. Get started experimenting with Gemini Nano in your own app and\n  \u003ca\n    href="https://developer.android.com/ai/gemini-nano/experimental"\n    data-label="path: https://developer.android.com/ai/gemini-nano/experimental"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003efollow the guide to begin experimenting with on-device AI capabilities to enhance your\n    app\u003c/a\n  \u003e.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://developer.android.com/studio/projects/templates",
                    title: "Build with the Google AI client SDK in Android Studio\n",
                    description:
                        '\u003cp\u003e\n  Android Studio includes a new project template for the Gemini API that helps\n  you explore and prototype generative AI in Android apps with the Google AI\n  client SDK.\n\u003c/p\u003e \u003cp\u003e\n  Follow the steps in the template to set up an API key (if you don\'t already\n  have one). Then, configure the application and make your first API call. The\n  template automatically sets up an Android app that connects to the Gemini API\n  and summarizes text.\n\u003c/p\u003e \u003cp\u003e\n  Note that there are\n  \u003ca\n    href="https://ai.google.dev/gemini-api/docs/api-key#security"\n    data-label="path: https://ai.google.dev/gemini-api/docs/api-key#security"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eadditional security considerations\u003c/a\n  \u003e\n  for using API keys directly in mobile client applications. The final step in\n  this solution shows how to prepare your Android app for use cases beyond prototyping\n  (most importantly, production) by\n  \u003ca\n    href="https://firebase.google.com/docs/vertex-ai/migrate-to-vertex-ai?platform=android"\n    data-label="path: https://firebase.google.com/docs/vertex-ai/migrate-to-vertex-ai?platform=android"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003emigrating to Vertex AI in Firebase\u003c/a\n  \u003e\n  to access the Gemini API.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://github.com/google/generative-ai-android/tree/main/generativeai-android-sample",
                    title: "Explore the Android sample apps in Kotlin\n",
                    description:
                        '\u003cp\u003e\n  Explore the generative AI sample app for the Google AI client SDK for Android.\n\u003c/p\u003e \u003cp\u003e\n  This example app demonstrates three key use cases: generating text, photo\n  reasoning (using multimodal inputs), and multi-turn conversations (chat). It\n  also shows how to use\n  \u003ca\n    href="https://ai.google.dev/api/generate-content#text_gen_text_only_prompt_streaming-KOTLIN"\n    data-label="path: https://ai.google.dev/api/generate-content#text_gen_text_only_prompt_streaming-KOTLIN"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003econtent streaming\u003c/a\n  \u003e\n  to improve response time by displaying partial results.\n\u003c/p\u003e \u003cp\u003e\n  Follow the steps in the \u003ccode translate="no" dir="ltr"\u003eREADME\u003c/code\u003e to get started, which includes\n  configuring your Gemini API key.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://ai.google.dev/gemini-api/docs/file-prompting-strategies",
                    title: "Multimodal prompting using the Google AI SDK\n",
                    description:
                        '\u003cp\u003e\n  Multimodal prompts combine different types of media together, such as text,\n  images, and audio. For example, you could create prompts that identify objects\n  in an image, extract text from a photo, or reference a picture.\n\u003c/p\u003e \u003cp\u003e\n  To get started, read this guide about file prompting strategies and multimodal\n  concepts, which includes best practices for designing multimodal prompts.\n\u003c/p\u003e \u003cp\u003e\n  Next, explore the multimodal capabilities of the Gemini models in\n  \u003ca\n    href="https://aistudio.google.com/"\n    data-label="path: https://aistudio.google.com/"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003eGoogle AI Studio\u003c/a\n  \u003e\n  by uploading or selecting a file as part of your prompt.\n\u003c/p\u003e \u003cp\u003e\n  \u003ca\n    href="https://ai.google.dev/api/generate-content#text_gen_multimodal_one_image_prompt-KOTLIN"\n    data-label="path: https://ai.google.dev/api/generate-content#text_gen_multimodal_one_image_prompt-KOTLIN"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eLearn how to use multimodal inputs\u003c/a\n  \u003e\n  using the Google AI client SDK for Android, find\n  \u003ca\n    href="https://ai.google.dev/gemini-api/docs/vision#prompting-images"\n    data-label="path: https://ai.google.dev/gemini-api/docs/vision#prompting-images"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eimage requirements for prompts\u003c/a\n  \u003e, and explore the\n  \u003ca\n    href="https://github.com/google/generative-ai-android/tree/main/generativeai-android-sample#features"\n    data-label="path: https://github.com/google/generative-ai-android/tree/main/generativeai-android-sample#features"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003emultimodal photo reasoning demo in the sample app\u003c/a\n  \u003e.\n\u003c/p\u003e\n\u003cp\u003e\n  For further reading, see the solution\n  \u003ca\n    href="https://developers.google.com/learn/pathways/solution-ai-gemini-images"\n    data-label="path: https://developers.google.com/learn/pathways/solution-ai-gemini-images"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eLeveraging the Gemini Pro Vision model for image understanding, multimodal\n    prompts and accessibility\u003c/a\n  \u003e.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://firebase.google.com/docs/vertex-ai/migrate-to-vertex-ai",
                    title: "Prepare for production by migrating to Vertex AI in Firebase\n",
                    description:
                        '\u003cp\u003e\n  \u003ci\u003eUsing the Google AI client SDK for Android to call the Gemini API directly\n  from a mobile client is only for prototyping and experimentation.\u003c/i\u003e\n  When you start to seriously develop your app beyong prototyping (especially as\n  you prepare for production), transition to use Vertex AI in Firebase and its\n  SDK for Android.\n\u003c/p\u003e \u003cp\u003e\n  \u003cb\u003eFor calling the Gemini API directly from your Android app, we strongly\n  recommend using the Vertex AI in Firebase client SDK for Android.\u003c/b\u003e\n  This SDK offers enhanced security features for mobile apps, including\n  Firebase App Check to help protect your app from unauthorized client access.\n  When you use this SDK, you can include large media files in your requests by\n  using Cloud Storage for Firebase.\n  Vertex AI in Firebase also integrates with other products in Google\'s Firebase\n  developer platform (like Cloud Firestore and Firebase Remote Config), while also\n  giving you streamlined access to the tools, workflows, and scale offered through\n  Google Cloud.\n  \u003ca\n    href="https://cloud.google.com/vertex-ai/generative-ai/docs/migrate/migrate-google-ai#google-ai"\n    data-label="path: https://cloud.google.com/vertex-ai/generative-ai/docs/migrate/migrate-google-ai"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eAmong other differences\u003c/a\n  \u003e\n  , Vertex AI also supports increased request quotas and enterprise features.\n\u003c/p\u003e \u003cp\u003e\n  Follow this guide to migrate to the Vertex AI in Firebase client SDK by\n  updating your package dependencies, imports, and changing how the AI model is\n  initialized.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://developers.google.com/learn/pathways/quizzes/solution-ai-gemini-getting-started-android",
                    title: "Quiz",
                    description:
                        "Test your knowledge and earn your 'Getting started with the Gemini API and Android' badge.",
                    quiz: {
                        badge: {
                            title: "Getting started with the Gemini API and Android",
                            description:
                                "Completed the 'Getting started with the Gemini API and Android' learning pathway and quiz\n",
                            imageUrl:
                                "/static/profile/badges/playlists/solutions/ai-gemini-getting-started-android/badge.svg",
                            sharing: {
                                title: "Achievement unlocked! I learned about getting started with the Gemini API and Android. Check it out! #DevBadges",
                                description:
                                    "Earn this badge when you complete the 'Getting started with the Gemini API and Android' learning pathway and quiz.",
                                imageUrl:
                                    "/static/profile/badges/playlists/solutions/ai-gemini-getting-started-android/share.png",
                                imagePath:
                                    "developers.google.com/static/profile/badges/playlists/solutions/ai-gemini-getting-started-android/share.png",
                            },
                            url: "https://developers.google.com/profile/badges/playlists/solutions/ai-gemini-getting-started-android",
                            imagePath:
                                "developers.google.com/static/profile/badges/playlists/solutions/ai-gemini-getting-started-android/badge.svg",
                        },
                    },
                },
            ],
        },
    },
    {
        url: "https://developers.google.com/learn/pathways/solution-ai-gemini-getting-started-dart-flutter",
        title: "Getting started with the Gemini API and Dart and Flutter\n",
        description:
            "Learn how to use the Gemini API and the Google AI Dart SDK to prototype generative AI in Dart and Flutter applications.\n",
        playlist: {
            learningActivities: [
                {
                    url: "https://developers.google.com/learn/pathways/solution-ai-gemini-101",
                    title: "Introduction to the Gemini API and prompt engineering\n",
                    description:
                        '\u003cp\u003e\n  Explore Google AI Studio and the capabilities of the Gemini generative AI\n  model. Learn how to design and test the different types of prompts (freeform,\n  structured, and chat) and get an API key for the Gemini API.\n\u003c/p\u003e \u003cp\u003e\n  This pathway can be useful for further experimentation with the Gemini API and\n  lays the groundwork for integrating its features into your application.\n  Optionally, you can also try out the API using a simple NodeJS web\n  application. If you don\'t already have NodeJS and NPM on your machine, feel\n  free to skip this step and return back to Dart and Flutter in this pathway.\n\u003c/p\u003e \u003cp\u003e\n  Note that \u003cb\u003ecalling the Gemini API directly from your mobile or web app using\n  the Google AI Dart SDK is only for \u003ci\u003eprototyping\u003c/i\u003e\u003c/b\u003e and exploring the\n  Gemini generative AI models. For use cases beyond prototyping\n  (especially production or enterprise-scale apps), use\n  \u003ca\n    href="https://firebase.google.com/docs/vertex-ai"\n    data-label="path: https://firebase.google.com/docs/vertex-ai"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\u003e\n    Vertex AI in Firebase\n  \u003c/a\u003e\n  instead.\u003c/b\u003e It offers an SDK for Flutter that has additional security features,\n  support for large media file uploads, and streamlined integrations into the\n  Firebase and Google Cloud ecosystem. Alternatively, you can use the\n  Google AI Dart SDK to access the Gemini models server-side.\n\u003c/p\u003e\n',
                    playlist: {},
                },
                {
                    url: "https://dartpad.dev/?sample=google-ai-sdk",
                    title: "Run the Google AI SDK sample on DartPad\n",
                    description:
                        "\u003cp\u003eTry out a Flutter demo of the Google AI Dart SDK on DartPad.\u003c/p\u003e \u003cp\u003e\n  This interactive demo shows how to build a chat app in Flutter that uses the\n  multi-turn conversations functionality from the SDK. Learn how to implement\n  the user interface and manage the state of the conversation.\n\u003c/p\u003e \u003cp\u003eEnter your Gemini API key when prompted to get started.\u003c/p\u003e\n",
                    page: {},
                },
                {
                    url: "https://www.youtube.com/watch?v=B1RKFL6ASts",
                    title: "Gemini API and Flutter: Practical, AI-Driven apps with Google AI tools\n",
                    description:
                        "\u003cp\u003e\n  Watch this talk from Google I/O 2024 to get an overview about generative AI,\n  Google AI Studio, and prompt design.\n\u003c/p\u003e \u003cp\u003e\n  Follow along to integrate the Google AI Dart SDK into a Flutter application and\n  build a recipe application that uses the Gemini 1.5 Pro model with multimodal\n  prompts.\n\u003c/p\u003e\n",
                    page: {},
                },
                {
                    url: "https://ai.google.dev/gemini-api/docs/quickstart",
                    title: "Introduction to the Google AI Dart SDK\n",
                    description:
                        '\u003cp\u003e\n  The\n  \u003ca\n    href="https://github.com/google/generative-ai-dart"\n    data-label="path: https://github.com/google/generative-ai-dart"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003eGoogle AI Dart SDK\u003c/a\n  \u003e\n  is a Dart-first, cross-platform SDK for building your generative AI\n  integration with the\n  \u003ca\n    href="https://ai.google.dev/gemini-api/docs"\n    data-label="path: https://ai.google.dev/gemini-api/docs"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eGoogle AI Gemini API\u003c/a\n  \u003e. This SDK also supports Flutter on all platforms.\n\u003c/p\u003e \u003cp\u003e\n  \u003cb\u003eWhen calling the Gemini API directly from your mobile or web app, the\n  Google AI Dart SDK is only for \u003ci\u003eprototyping\u003c/i\u003e.\u003c/b\u003e\n  There are\n    \u003ca\n      href="https://ai.google.dev/gemini-api/docs/api-key#security"\n      data-label="path: https://ai.google.dev/gemini-api/docs/api-key#security"\n      data-category="devsite-playlist: content link"\n      class="gc-analytics-event"\n      \u003eadditional security considerations\u003c/a\n    \u003e\n  for using the Gemini API key in your web and mobile client applications since\n  you\'re risking exposing this API key to malicious actors if it\'s embedded or\n  retrieved by your client application. So, for use cases beyond prototyping\n  (especially production and enterprise-scale apps),\n    \u003ca\n      href="https://firebase.google.com/docs/vertex-ai/migrate-to-vertex-ai?platform=flutter"\n      data-label="path: https://firebase.google.com/docs/vertex-ai/migrate-to-vertex-ai?platform=flutter"\n      data-category="devsite-playlist: content link"\n      class="gc-analytics-event"\n      \u003emigrate to Vertex AI in Firebase\u003c/a\n    \u003e\n  to call the Gemini API directly from your client app. Alternatively, you can access the\n  Gemini models server-side using either the Google AI Dart SDK or through\n    \u003ca\n      href="https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/overview"\n      data-label="path: https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/overview"\n      data-category="devsite-playlist: content link"\n      class="gc-analytics-event"\n      \u003eVertex AI\u003c/a\n    \u003e.\n\u003c/p\u003e \u003cp\u003e\n  To get started with the Google AI Dart SDK, set up a project in Google AI Studio,\n  which includes obtaining an API key for the Gemini API. Next, add the\n  required dependencies to your app\'s \u003ccode translate="no" dir="ltr"\u003epubspec.yaml\u003c/code\u003e\n  (\u003ccode translate="no" dir="ltr"\u003egoogle_generative_ai\u003c/code\u003e). Then, you can initialize the library with\n  your API key and make your first API call.\n\u003c/p\u003e \u003cp\u003e\n  You can also\n  \u003ca\n    href="https://www.youtube.com/shorts/1AuzJEiHjO4"\n    data-label="path: https://www.youtube.com/shorts/1AuzJEiHjO4"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003echeck out this YouTube Short\u003c/a\n  \u003e\n  for a quick overview over the Google AI Dart SDK and how to get started.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://github.com/google/generative-ai-dart/tree/main?tab=readme-ov-file#dart-samples",
                    title: "Explore the Dart SDK and Flutter sample apps\n",
                    description:
                        '\u003cp\u003e\n  Explore the generative AI example apps for the Google AI Dart SDK for Flutter\n  and Dart.\n\u003c/p\u003e \u003cp\u003e\n  The\n  \u003ca\n    href="https://github.com/google/generative-ai-dart/tree/main/samples/dart"\n    data-label="path: https://github.com/google/generative-ai-dart/tree/main/samples/dart"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003eDart code samples\u003c/a\n  \u003e\n  demonstrate three key use cases:\n  \u003ca\n    href="https://github.com/google/generative-ai-dart/blob/main/samples/dart/bin/simple_text.dart"\n    data-label="path: https://github.com/google/generative-ai-dart/blob/main/samples/dart/bin/simple_text.dart"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003egenerating text\u003c/a\n  \u003e,\n  \u003ca\n    href="https://github.com/google/generative-ai-dart/blob/main/samples/dart/bin/simple_text_and_image.dart"\n    data-label="path: https://github.com/google/generative-ai-dart/blob/main/samples/dart/bin/simple_text_and_image.dart"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003ephoto reasoning (using multimodal inputs)\u003c/a\n  \u003e, and\n  \u003ca\n    href="https://github.com/google/generative-ai-dart/blob/main/samples/dart/bin/simple_chat.dart"\n    data-label="path: https://github.com/google/generative-ai-dart/blob/main/samples/dart/bin/simple_chat.dart"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003emulti-turn conversations (chat)\u003c/a\n  \u003e. It also shows advanced topics, such as how to use\n  \u003ca\n    href="https://github.com/google/generative-ai-dart/blob/main/samples/dart/bin/advanced_text.dart"\n    data-label="path: https://github.com/google/generative-ai-dart/blob/main/samples/dart/bin/advanced_text.dart"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003econtent streaming\u003c/a\n  \u003e\n  to improve response time by displaying partial results.\n\u003c/p\u003e \u003cp\u003e\n  The\n  \u003ca\n    href="https://github.com/google/generative-ai-dart/tree/main/samples/flutter_app"\n    data-label="path: https://github.com/google/generative-ai-dart/tree/main/samples/flutter_app"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003eFlutter sample app\u003c/a\n  \u003e\n  demonstrates how to implement multi-turn conversations (chat) and photo\n  reasoning (using multimodal inputs) in a multi-platform application.\n\u003c/p\u003e \u003cp\u003e\n  Follow the steps in the \u003ccode translate="no" dir="ltr"\u003eREADME\u003c/code\u003e for each sample to get started,\n  which includes configuring your Gemini API key and providing it as an\n  environment variable.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://ai.google.dev/gemini-api/docs/file-prompting-strategies",
                    title: "Multimodal prompting using the Google AI Dart SDK\n",
                    description:
                        '\u003cp\u003e\n  Multimodal prompts combine different types of media together, such as text,\n  images, and audio. For example, you could create prompts that identify objects\n  in an image, extract text from a photo, or reference a picture.\n\u003c/p\u003e \u003cp\u003e\n  To get started, read this guide about file prompting strategies and multimodal\n  concepts, which includes best practices for designing multimodal prompts.\n\u003c/p\u003e \u003cp\u003e\n  Next, explore the multimodal capabilities of the Gemini models in\n  \u003ca\n    href="https://aistudio.google.com/"\n    data-label="path: https://aistudio.google.com/"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003eGoogle AI Studio\u003c/a\n  \u003e\n  by uploading or selecting a file as part of your prompt.\n\u003c/p\u003e \u003cp\u003e\n  \u003ca\n    href="https://ai.google.dev/api/generate-content#text_gen_multimodal_one_image_prompt-DART"\n    data-label="path: https://ai.google.dev/api/generate-content#text_gen_multimodal_one_image_prompt-DART"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eLearn how to use multimodal inputs\u003c/a\n  \u003e\n  using the Google AI Dart SDK, find\n  \u003ca\n    href="https://ai.google.dev/gemini-api/docs/vision#prompting-images"\n    data-label="path: https://ai.google.dev/gemini-api/docs/vision#prompting-images"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eimage requirements for prompts\u003c/a\n  \u003e, and explore the\n  \u003ca\n    href="https://github.com/google/generative-ai-dart/tree/main/samples/flutter_app"\n    data-label="path: https://github.com/google/generative-ai-dart/tree/main/samples/flutter_app"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003emultimodal image chat demo in the Flutter sample app\u003c/a\n  \u003e\n  or in the\n  \u003ca\n    href="https://github.com/google/generative-ai-dart/blob/main/samples/dart/bin/simple_text_and_image.dart"\n    data-label="path: https://github.com/google/generative-ai-dart/blob/main/samples/dart/bin/simple_text_and_image.dart"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003eDart sample scripts\u003c/a\n  \u003e.\n\u003c/p\u003e \u003cp\u003e\n  For further reading, see the solution\n  \u003ca\n    href="https://developers.google.com/learn/pathways/solution-ai-gemini-images"\n    data-label="path: https://developers.google.com/learn/pathways/solution-ai-gemini-images"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eLeveraging the Gemini Pro Vision model for image understanding, multimodal\n    prompts and accessibility\u003c/a\n  \u003e.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://firebase.google.com/docs/vertex-ai/migrate-to-vertex-ai",
                    title: "Prepare for production by migrating to Vertex AI in Firebase\n",
                    description:
                        '\u003cp\u003e\n  \u003ci\u003eUsing the Google AI Dart SDK to call the Gemini API directly\n  from a web or mobile client is only for prototyping and experimentation.\u003c/i\u003e\n  When you start to seriously develop your app beyong prototyping (especially as\n  you prepare for production), transition to use Vertex AI in Firebase and its\n  SDK for Flutter.\n\u003c/p\u003e \u003cp\u003e\n  \u003cb\u003eFor calling the Gemini API directly from your web or mobile app, we strongly\n  recommend using the Vertex AI in Firebase client SDK for Flutter.\u003c/b\u003e\n  This SDK offers enhanced security features for web and mobile apps, including\n  Firebase App Check to help protect your app from unauthorized client access.\n  When you use this SDK, you can include large media files in your requests by\n  using Cloud Storage for Firebase.\n  Vertex AI in Firebase also integrates with other products in Google\'s Firebase\n  developer platform (like Cloud Firestore and Firebase Remote Config), while also\n  giving you streamlined access to the tools, workflows, and scale offered through\n  Google Cloud.\n  \u003ca\n    href="https://cloud.google.com/vertex-ai/generative-ai/docs/migrate/migrate-google-ai#google-ai"\n    data-label="path: https://cloud.google.com/vertex-ai/generative-ai/docs/migrate/migrate-google-ai"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eAmong other differences\u003c/a\n  \u003e\n  , Vertex AI also supports increased request quotas and enterprise features.\n\u003c/p\u003e \u003cp\u003e\n  Follow this guide to migrate to the Vertex AI in Firebase client SDK by\n  updating your package dependencies, imports, and changing how the AI model is\n  initialized.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://developers.google.com/learn/pathways/quizzes/solution-ai-gemini-getting-started-dart-flutter",
                    title: "Quiz",
                    description:
                        "Test your knowledge and earn your 'Getting started with the Gemini API and Dart and Flutter' badge.",
                    quiz: {
                        badge: {
                            title: "Getting started with the Gemini API and Dart and Flutter",
                            description:
                                "Completed the 'Getting started with the Gemini API and Dart and Flutter' learning pathway and quiz\n",
                            imageUrl:
                                "/static/profile/badges/playlists/solutions/ai-gemini-getting-started-dart-flutter/badge.svg",
                            sharing: {
                                title: "Achievement unlocked! I learned about getting started with the Gemini API and Dart and Flutter. Check it out! #DevBadges",
                                description:
                                    "Earn this badge when you complete the 'Getting started with the Gemini API and Dart and Flutter' learning pathway and quiz.",
                                imageUrl:
                                    "/static/profile/badges/playlists/solutions/ai-gemini-getting-started-dart-flutter/share.png",
                                imagePath:
                                    "developers.google.com/static/profile/badges/playlists/solutions/ai-gemini-getting-started-dart-flutter/share.png",
                            },
                            url: "https://developers.google.com/profile/badges/playlists/solutions/ai-gemini-getting-started-dart-flutter",
                            imagePath:
                                "developers.google.com/static/profile/badges/playlists/solutions/ai-gemini-getting-started-dart-flutter/badge.svg",
                        },
                    },
                },
            ],
        },
    },
    {
        url: "https://developers.google.com/learn/pathways/solution-ai-gemini-getting-started-swift",
        title: "Getting started with the Gemini API and Swift\n",
        description:
            "Learn how to use the Gemini API and the Google AI Swift SDK to prototype generative AI with Swift. Use the Google AI Swift SDK to make your first generative AI call using the Gemini API in your application. Explore a sample application and learn how to make multimodal prompts (that combine image and text).\n",
        playlist: {
            learningActivities: [
                {
                    url: "https://developers.google.com/learn/pathways/solution-ai-gemini-101",
                    title: "Introduction to the Gemini API and prompt engineering\n",
                    description:
                        '\u003cp\u003e\n  Explore Google AI Studio and the capabilities of the Gemini generative AI\n  model. Learn how to design and test the different types of prompts (freeform,\n  structured, and chat) and get an API key for the Gemini API.\n\u003c/p\u003e \u003cp\u003e\n  Note that \u003cb\u003ethe Google AI Swift SDK is only for \u003ci\u003eprototyping\u003c/i\u003e\u003c/b\u003e and\n  exploring the Gemini generative AI models. For use cases beyond prototyping\n  (especially production or enterprise-scale apps), use\n  \u003ca\n    href="https://firebase.google.com/docs/vertex-ai"\n    data-label="path: https://firebase.google.com/docs/vertex-ai"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\u003e\n    Vertex AI in Firebase\n  \u003c/a\u003e\n  instead.\u003c/b\u003e It offers an SDK for Swift that has additional security features,\n  support for large media file uploads, and streamlined integrations into the\n  Firebase and Google Cloud ecosystem.\n\u003c/p\u003e \u003cp\u003e\n  This pathway can be useful for further experimentation with the Gemini API and\n  lays the groundwork for integrating its features into your application.\n  Optionally, you can also try out the Gemini API using a simple NodeJS web\n  application. If you don\'t already have NodeJS and NPM on your machine, feel\n  free to skip this step and return back to Swift in this pathway.\n\u003c/p\u003e\n',
                    playlist: {},
                },
                {
                    url: "https://ai.google.dev/gemini-api/docs/quickstart",
                    title: "Introduction to the Google AI Swift SDK\n",
                    description:
                        '\u003cp\u003e\n  The\n  \u003ca\n    href="https://github.com/google/generative-ai-swift"\n    data-label="path: https://github.com/google/generative-ai-swift"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\u003e\n    Google AI Swift SDK\n  \u003c/a\u003e\n  is a Swift-first, cross-platform SDK that gives you access to the\n  \u003ca\n    href="https://ai.google.dev/gemini-api/docs"\n    data-label="path: https://ai.google.dev/gemini-api/docs"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\u003e\n    Google AI Gemini API\u003c/a\n  \u003e\n  for prototyping your generative AI integration. This SDK supports Swift on\n  most platforms.\n\u003c/p\u003e \u003cp\u003e\n  To get started with the Google AI Swift SDK, set up a project in Google AI\n  Studio, which includes obtaining an API key for the Gemini API. Next, add the\n  \u003ccode translate="no" dir="ltr"\u003eGoogleGenerativeAI\u003c/code\u003e\n  package to your app\'s project configuration. Then, you can initialize the\n  generative model and make your first API call.\n\u003c/p\u003e \u003cp\u003e\n  \u003cb\u003eThe Google AI Swift SDK is only for \u003ci\u003eprototyping\u003c/i\u003e.\u003c/b\u003e\n  There are\n    \u003ca\n      href="https://ai.google.dev/gemini-api/docs/api-key#security"\n      data-label="path: https://ai.google.dev/gemini-api/docs/api-key#security"\n      data-category="devsite-playlist: content link"\n      class="gc-analytics-event"\n      \u003eadditional security considerations\u003c/a\n    \u003e\n  for using the Gemini API key in your mobile client applications since\n  you\'re risking exposing this API key to malicious actors if it\'s embedded or\n  retrieved by your client application. So, for use cases beyond prototyping\n  (especially production and enterprise-scale apps),\n    \u003ca\n      href="https://firebase.google.com/docs/vertex-ai/migrate-to-vertex-ai?platform=ios"\n      data-label="path: https://firebase.google.com/docs/vertex-ai/migrate-to-vertex-ai?platform=ios"\n      data-category="devsite-playlist: content link"\n      class="gc-analytics-event"\n      \u003emigrate to Vertex AI in Firebase\u003c/a\n    \u003e\n  to call the Gemini API directly from your client app. Alternatively, you can\n  access the Gemini models server-side through\n    \u003ca\n      href="https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/overview"\n      data-label="path: https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/overview"\n      data-category="devsite-playlist: content link"\n      class="gc-analytics-event"\n      \u003eVertex AI\u003c/a\n    \u003e.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://github.com/google/generative-ai-swift?tab=readme-ov-file#try-out-the-sample-swift-app",
                    title: "Explore the Swift SDK and sample apps\n",
                    description:
                        '\u003cp\u003e\n  Explore more advanced use cases for the Google AI Swift SDK with code samples\n  and demo apps on GitHub.\n\u003c/p\u003e \u003cp\u003e\n  The\n  \u003ca\n    href="https://github.com/google/generative-ai-swift/tree/main/Examples/GenerativeAISample"\n    data-category="devsite-playlist: content link"\n    data-label="path: https://github.com/google/generative-ai-swift/tree/main/Examples/GenerativeAISample"\n    class="gc-analytics-event external"\u003e\n    Swift code samples\n  \u003c/a\u003e\n  demonstrate three key use cases:\n  \u003ca\n    href="https://github.com/google/generative-ai-swift/blob/main/Examples/GenerativeAISample/GenerativeAITextSample/ViewModels/SummarizeViewModel.swift"\n    data-label="path: https://github.com/google/generative-ai-swift/blob/main/Examples/GenerativeAISample/GenerativeAITextSample/ViewModels/SummarizeViewModel.swift"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\u003e\n    generating text\n  \u003c/a\u003e\n  ,\n  \u003ca\n    href="https://github.com/google/generative-ai-swift/blob/main/Examples/GenerativeAISample/GenerativeAIMultimodalSample/ViewModels/PhotoReasoningViewModel.swift"\n    data-label="path: https://github.com/google/generative-ai-swift/blob/main/Examples/GenerativeAISample/GenerativeAIMultimodalSample/ViewModels/PhotoReasoningViewModel.swift"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\u003e\n    photo reasoning (using multimodal inputs)\n  \u003c/a\u003e\n  , and\n  \u003ca\n    href="https://github.com/google/generative-ai-swift/blob/main/Examples/GenerativeAISample/ChatSample/ViewModels/ConversationViewModel.swift"\n    data-label="path: https://github.com/google/generative-ai-swift/blob/main/Examples/GenerativeAISample/ChatSample/ViewModels/ConversationViewModel.swift"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\u003e\n    multi-turn conversations (chat)\n  \u003c/a\u003e\n  . They also show how to use content streaming to improve response time by\n  displaying partial results.\n\u003c/p\u003e \u003cp\u003e\n  Follow the steps in the \u003ccode translate="no" dir="ltr"\u003eREADME\u003c/code\u003e to get started, which includes\n  setting up your Gemini API Key and providing it in a \u003ccode translate="no" dir="ltr"\u003e.plist\u003c/code\u003e file.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://ai.google.dev/gemini-api/docs/file-prompting-strategies",
                    title: "Multimodal prompting using the Google AI Swift SDK\n",
                    description:
                        '\u003cp\u003e\n  Multimodal prompts combine different types of media together, such as text,\n  images, and audio. For example, you could create prompts that identify objects\n  in an image, extract text from a photo, or reference a picture.\n\u003c/p\u003e \u003cp\u003e\n  To get started, read this guide about file prompting strategies and multimodal\n  concepts, which includes best practices for designing multimodal prompts.\n\u003c/p\u003e \u003cp\u003e\n  Next, explore the multimodal capabilities of the Gemini models in\n  \u003ca\n    href="https://aistudio.google.com/"\n    data-label="path: https://aistudio.google.com/"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\u003e\n      Google AI Studio\n  \u003c/a\u003e\n  by uploading or selecting a file as part of your prompt.\n\u003c/p\u003e \u003cp\u003e\n  \u003ca\n    href="https://ai.google.dev/api/generate-content#text_gen_multimodal_one_image_prompt-SWIFT"\n    data-label="path: https://ai.google.dev/api/generate-content#text_gen_multimodal_one_image_prompt-SWIFT"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\u003e\n      Learn how to use multimodal inputs\n  \u003c/a\u003e\n  using the Google AI Swift SDK, find\n  \u003ca\n    href="https://ai.google.dev/gemini-api/docs/vision#prompting-images"\n    data-label="path: https://ai.google.dev/gemini-api/docs/vision#prompting-images"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003e\n    image requirements for prompts\n  \u003c/a\u003e\n  , and explore the\n  \u003ca\n    href="https://github.com/google/generative-ai-swift/blob/main/Examples/GenerativeAISample/GenerativeAIMultimodalSample/ViewModels/PhotoReasoningViewModel.swift"\n    data-label="path: https://github.com/google/generative-ai-swift/blob/main/Examples/GenerativeAISample/GenerativeAIMultimodalSample/ViewModels/PhotoReasoningViewModel.swift"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\u003e\n      multimodal image demo in the Swift sample app\n  \u003c/a\u003e\n  .\n\u003c/p\u003e \u003cp\u003e\n  For further reading, see the solution\n  \u003ca\n    href="https://developers.google.com/learn/pathways/solution-ai-gemini-images"\n    data-label="path: https://developers.google.com/learn/pathways/solution-ai-gemini-images"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\u003e\n    Leveraging the Gemini Pro Vision model for image understanding, multimodal\n    prompts and accessibility\n    \u003c/a\u003e\n    .\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://firebase.google.com/docs/vertex-ai/migrate-to-vertex-ai",
                    title: "Prepare for production by migrating to Vertex AI in Firebase\n",
                    description:
                        '\u003cp\u003e\n  \u003ci\u003eUsing the Google AI Swift SDK to call the Gemini API directly from\n  a mobile client is only for prototyping and experimentation.\u003c/i\u003e\n  When you start to seriously develop your app beyong prototyping (especially as\n  you prepare for production), transition to use Vertex AI in Firebase and its\n  SDK for Apple platforms.\n\u003c/p\u003e \u003cp\u003e\n  \u003cb\u003eFor calling the Gemini API directly from your Swift app, we strongly\n  recommend using the Vertex AI in Firebase client SDK for Apple platforms.\u003c/b\u003e\n  This SDK offers enhanced security features for mobile apps, including\n  Firebase App Check to help protect your app from unauthorized client access.\n  When you use this SDK, you can include large media files in your requests by\n  using Cloud Storage for Firebase.\n  Vertex AI in Firebase also integrates with other products in Google\'s Firebase\n  developer platform (like Cloud Firestore and Firebase Remote Config), while also\n  giving you streamlined access to the tools, workflows, and scale offered through\n  Google Cloud.\n  \u003ca\n    href="https://cloud.google.com/vertex-ai/generative-ai/docs/migrate/migrate-google-ai#google-ai"\n    data-label="path: https://cloud.google.com/vertex-ai/generative-ai/docs/migrate/migrate-google-ai"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eAmong other differences\u003c/a\n  \u003e\n  , Vertex AI also supports increased request quotas and enterprise features.\n\u003c/p\u003e \u003cp\u003e\n  Follow this guide to migrate to the Vertex AI in Firebase client SDK by updating\n  your package dependencies and imports, as well as changing how the AI model is\n  initialized.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://developers.google.com/learn/pathways/quizzes/solution-ai-gemini-getting-started-swift",
                    title: "Quiz",
                    description:
                        "Test your knowledge and earn your 'Getting started with Gemini and Swift' badge.",
                    quiz: {
                        badge: {
                            title: "Getting started with the Gemini API and Swift",
                            description:
                                "Completed the 'Getting started with the Gemini API and Swift' learning pathway and quiz\n",
                            imageUrl:
                                "/static/profile/badges/playlists/solutions/ai-gemini-getting-started-swift/badge.svg",
                            sharing: {
                                title: "Achievement unlocked! I learned about getting started with the Gemini API and Swift. Check it out! #DevBadges",
                                description:
                                    "Earn this badge when you complete the 'Getting started with the Gemini API and Swift' learning pathway and quiz.",
                                imageUrl:
                                    "/static/profile/badges/playlists/solutions/ai-gemini-getting-started-swift/share.png",
                                imagePath:
                                    "developers.google.com/static/profile/badges/playlists/solutions/ai-gemini-getting-started-swift/share.png",
                            },
                            url: "https://developers.google.com/profile/badges/playlists/solutions/ai-gemini-getting-started-swift",
                            imagePath:
                                "developers.google.com/static/profile/badges/playlists/solutions/ai-gemini-getting-started-swift/badge.svg",
                        },
                    },
                },
            ],
        },
    },
    {
        url: "https://developers.google.com/learn/pathways/solution-ai-gemini-getting-started-web",
        title: "Getting started with the Gemini API and Web apps\n",
        description:
            "Learn how to use the Gemini API and the Google AI JavaScript SDK to prototype generative AI for web apps. Use the Google AI JavaScript SDK to make your first generative AI call using the Gemini API in your client-side web application. Explore a sample application and learn how to make multimodal prompts (that combine image and text).\n",
        playlist: {
            learningActivities: [
                {
                    url: "https://developers.google.com/learn/pathways/solution-ai-gemini-101",
                    title: "Introduction to the Gemini API and prompt engineering\n",
                    description:
                        '\u003cp\u003e\n  Explore Google AI Studio and the capabilities of the Gemini generative AI\n  model. Learn how to design and test the different types of prompts (freeform,\n  structured, and chat), get an API key, and build a simple NodeJS application.\n\u003c/p\u003e \u003cp\u003e\n  This pathway is useful for further experimentation with Gemini and lays the\n  groundwork for integrating its features into a web application. Optionally,\n  you can also try out the Gemini API using a simple NodeJS web application.\n  Feel free to skip this step and return back to client-side web development in\n  this pathway.\n\u003c/p\u003e \u003cp\u003e\n  Note that \u003cb\u003ecalling the Gemini API directly from your web app using\n  the Google AI JavaScript SDK is only for \u003ci\u003eprototyping\u003c/i\u003e\u003c/b\u003e and exploring\n  the Gemini generative AI models. For use cases beyond prototyping\n  (especially production or enterprise-scale apps), use\n  \u003ca\n    href="https://firebase.google.com/docs/vertex-ai"\n    data-label="path: https://firebase.google.com/docs/vertex-ai"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\u003e\n    Vertex AI in Firebase\n  \u003c/a\u003e\n  instead.\u003c/b\u003e It offers an SDK for Web that has additional security features,\n  support for large media file uploads, and streamlined integrations into the\n  Firebase and Google Cloud ecosystem. Alternatively, you can use the\n  Google AI JavaScript SDK to access the Gemini models server-side.\n\u003c/p\u003e\n',
                    playlist: {},
                },
                {
                    url: "https://developers.google.com/idx/guides/build-gemini-api-app",
                    title: "Try out the Gemini API template on Project IDX\n",
                    description:
                        '\u003cp\u003e\n  Try out the Gemini API template in Project IDX to quickly get started and\n  experiment with a JavaScript-based web app that uses generative AI. The\n  template contains a fully functioning app for you to quickly prototype with\n  the Gemini API on the web.\n\u003c/p\u003e \u003cp\u003e\n  \u003ca\n    href="https://developers.google.com/idx"\n    data-label="path: https://developers.google.com/idx"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eProject IDX\u003c/a\n  \u003e\n  is an experimental, web-based integrated development environment. It supports\n  a variety of frameworks, including development for both web and cross-platform\n  applications. It is currently available in\n  \u003ca\n    href="https://idx.dev/"\n    data-label="path: https://idx.dev/"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003ePublic Preview\u003c/a\n  \u003e.\n\u003c/p\u003e \u003cp\u003e\n  The template uses the Vite framework to build a web app that makes multimodal\n  prompts to the Gemini API using the Google AI SDK directly or using LangChain.\n\u003c/p\u003e \u003cp\u003e\n  To get started, follow the steps to create a new workspace using the "Gemini\n  API" template. Select the "JavaScript Web App" environment and follow the\n  guide to add your Gemini API key and run the application.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://ai.google.dev/gemini-api/docs/quickstart",
                    title: "Introduction to the Google AI JavaScript SDK\n",
                    description:
                        '\u003cp\u003e\n  The Google AI JavaScript SDK enables you to build your generative AI\n  integration with the\n  \u003ca\n    href="https://ai.google.dev/gemini-api/docs"\n    data-label="path: https://ai.google.dev/gemini-api/docs"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eGoogle AI Gemini API\u003c/a\n  \u003e.\n\u003c/p\u003e \u003cp\u003e\n  \u003cb\u003eWhen calling the Gemini API directly from your mobile or web app, the\n  Google AI JavaScript SDK is only for \u003ci\u003eprototyping\u003c/i\u003e.\u003c/b\u003e\n  There are\n    \u003ca\n      href="https://ai.google.dev/gemini-api/docs/api-key#security"\n      data-label="path: https://ai.google.dev/gemini-api/docs/api-key#security"\n      data-category="devsite-playlist: content link"\n      class="gc-analytics-event"\n      \u003eadditional security considerations\u003c/a\n    \u003e\n  for using the Gemini API key in your web client applications since\n  you\'re risking exposing this API key to malicious actors if it\'s embedded or\n  retrieved by your client application. So, for use cases beyond\n  prototyping (especially production and enterprise-scale apps),\n    \u003ca\n      href="https://firebase.google.com/docs/vertex-ai/migrate-to-vertex-ai?platform=web"\n      data-label="path: https://firebase.google.com/docs/vertex-ai/migrate-to-vertex-ai?platform=web"\n      data-category="devsite-playlist: content link"\n      class="gc-analytics-event"\n      \u003emigrate to Vertex AI in Firebase\u003c/a\n    \u003e\n  to call the Gemini API directly from your client app. Alternatively, you can access the\n  Gemini models server-side using either the Google AI JavaScript SDK or through\n    \u003ca\n      href="https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/overview"\n      data-label="path: https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/overview"\n      data-category="devsite-playlist: content link"\n      class="gc-analytics-event"\n      \u003eVertex AI\u003c/a\n    \u003e.\n\u003c/p\u003e \u003cp\u003e\n  To get started with the Google AI JavaScript SDK, set up a project in\n  Google AI Studio, which includes obtaining an API key for the Gemini API.\n  Next, add the required dependency for the SDK to your build configuration or\n  import it directly using \u003ccode translate="no" dir="ltr"\u003e@google/generative-ai\u003c/code\u003e. Then, you can\n  initialize the library with your API key and make your first API call.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://github.com/google/generative-ai-js/tree/main/samples/web",
                    title: "Explore the JavaScript sample app\n",
                    description:
                        '\u003cp\u003e\n  Explore more advanced use cases for the Google AI JavaScript SDK with the\n  sample app on GitHub.\n\u003c/p\u003e \u003cp\u003e\n  This example app demonstrates three key use cases in more detail:\n  \u003ca\n    href="https://github.com/google/generative-ai-js/blob/main/samples/web/index.html"\n    data-label="path: https://github.com/google/generative-ai-js/blob/main/samples/web/index.html"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003egenerating text, photo reasoning (using multimodal inputs)\u003c/a\n  \u003e, and\n  \u003ca\n    href="https://github.com/google/generative-ai-js/blob/main/samples/web/chat.html"\n    data-label="path: https://github.com/google/generative-ai-js/blob/main/samples/web/chat.html"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003emulti-turn conversations (chat)\u003c/a\n  \u003e. It also shows how to use\n  \u003ca\n    href="https://ai.google.dev/api/generate-content#text_gen_text_only_prompt_streaming-JAVASCRIPT"\n    data-label="path: https://ai.google.dev/api/generate-content#text_gen_text_only_prompt_streaming-JAVASCRIPT"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003econtent streaming\u003c/a\n  \u003e\n  to improve response time by displaying partial results.\n\u003c/p\u003e \u003cp\u003e\n  Follow the steps in the \u003ccode translate="no" dir="ltr"\u003eREADME\u003c/code\u003e to get started, which includes\n  configuring your Gemini API key and providing it to the HTTP server\n  included in this sample app.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://ai.google.dev/gemini-api/docs/file-prompting-strategies",
                    title: "Multimodal prompting using the Google AI Javascript SDK\n",
                    description:
                        '\u003cp\u003e\n  Multimodal prompts combine different types of media together, such as text,\n  images, and audio. For example, you could create prompts that identify objects\n  in an image, extract text from a photo, or reference a picture.\n\u003c/p\u003e \u003cp\u003e\n  To get started, read this guide about file prompting strategies and multimodal\n  concepts, which includes best practices for designing multimodal prompts.\n\u003c/p\u003e \u003cp\u003e\n  Next, explore the multimodal capabilities of the Gemini models in\n  \u003ca\n    href="https://aistudio.google.com/"\n    data-label="path: https://aistudio.google.com/"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003eGoogle AI Studio\u003c/a\n  \u003e\n  by uploading or selecting a file as part of your prompt.\n\u003c/p\u003e \u003cp\u003e\n  \u003ca\n    href="https://ai.google.dev/api/generate-content#text_gen_multimodal_one_image_prompt-JAVASCRIPT"\n    data-label="path: https://ai.google.dev/api/generate-content#text_gen_multimodal_one_image_prompt-JAVASCRIPT"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n  \u003e\n    Learn how to use multimodal inputs\n  \u003c/a\u003e\n  using the Google AI JavaScript SDK, find\n  \u003ca\n    href="https://ai.google.dev/gemini-api/docs/vision#prompting-images"\n    data-label="path: https://ai.google.dev/gemini-api/docs/vision#prompting-images"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n  \u003e\n    image requirements for prompts\n  \u003c/a\u003e\n  for prompts, and explore the\n  \u003ca\n    href="https://github.com/google/generative-ai-js/blob/main/samples/web/index.html"\n    data-label="path: https://github.com/google/generative-ai-js/blob/main/samples/web/index.html"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event external"\n    \u003emultimodal image reasoning demo in the sample app \u003c/a\n  \u003e.\n\u003c/p\u003e \u003cp\u003e\n  For further reading, see the solution\n  \u003ca\n    href="https://developers.google.com/learn/pathways/solution-ai-gemini-images"\n    class="gc-analytics-event"\n    data-label="path: https://developers.google.com/learn/pathways/solution-ai-gemini-images"\n    data-category="devsite-playlist: content link"\n    \u003eLeveraging the Gemini Pro Vision model for image understanding, multimodal\n    prompts and accessibility\u003c/a\n  \u003e.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://firebase.google.com/docs/vertex-ai/migrate-to-vertex-ai",
                    title: "Prepare for production by migrating to Vertex AI in Firebase\n",
                    description:
                        '\u003cp\u003e\n  \u003ci\u003eUsing the Google AI JavaScript SDK to call the Gemini API directly\n  from a web client is only for prototyping and experimentation.\u003c/i\u003e\n  When you start to seriously develop your app beyong prototyping (especially as\n  you prepare for production), transition to use Vertex AI in Firebase and its\n  SDK for Web.\n\u003c/p\u003e \u003cp\u003e\n  \u003cb\u003eFor calling the Gemini API directly from your web app, we strongly\n  recommend using the Vertex AI in Firebase client SDK for Web.\u003c/b\u003e\n  This SDK offers enhanced security features for web apps, including\n  Firebase App Check to help protect your app from unauthorized client access.\n  When you use this SDK, you can include large media files in your requests by\n  using Cloud Storage for Firebase.\n  Vertex AI in Firebase also integrates with other products in Google\'s Firebase\n  developer platform (like Cloud Firestore and Firebase Remote Config), while also\n  giving you streamlined access to the tools, workflows, and scale offered through\n  Google Cloud.\n  \u003ca\n    href="https://cloud.google.com/vertex-ai/generative-ai/docs/migrate/migrate-google-ai#google-ai"\n    data-label="path: https://cloud.google.com/vertex-ai/generative-ai/docs/migrate/migrate-google-ai"\n    data-category="devsite-playlist: content link"\n    class="gc-analytics-event"\n    \u003eAmong other differences\u003c/a\n  \u003e\n  , Vertex AI also supports increased request quotas and enterprise features.\n\u003c/p\u003e \u003cp\u003e\n  Follow this guide to migrate to the Vertex AI in Firebase client SDK by\n  updating your package dependencies, imports, and changing how the AI model is\n  initialized.\n\u003c/p\u003e\n',
                    page: {},
                },
                {
                    url: "https://developers.google.com/learn/pathways/quizzes/solution-ai-gemini-getting-started-web",
                    title: "Quiz",
                    description:
                        "Test your knowledge and earn your 'Getting started with the Gemini API and Web Apps' badge.",
                    quiz: {
                        badge: {
                            title: "Getting started with the Gemini API and Web Apps",
                            description:
                                "Completed the 'Getting started with the Gemini API and Web Apps' learning pathway and quiz\n",
                            imageUrl:
                                "/static/profile/badges/playlists/solutions/ai-gemini-getting-started-web/badge.svg",
                            sharing: {
                                title: "Achievement unlocked! I learned about getting started with the Gemini API and Web Apps. Check it out! #DevBadges",
                                description:
                                    "Earn this badge when you complete the 'Getting started with the Gemini API and Web Apps' learning pathway and quiz.",
                                imageUrl:
                                    "/static/profile/badges/playlists/solutions/ai-gemini-getting-started-web/share.png",
                                imagePath:
                                    "developers.google.com/static/profile/badges/playlists/solutions/ai-gemini-getting-started-web/share.png",
                            },
                            url: "https://developers.google.com/profile/badges/playlists/solutions/ai-gemini-getting-started-web",
                            imagePath:
                                "developers.google.com/static/profile/badges/playlists/solutions/ai-gemini-getting-started-web/badge.svg",
                        },
                    },
                },
            ],
        },
    },
    {
        url: "https://web.dev/learn/accessibility",
        title: "Learn Accessibility",
        description:
            "An evergreen accessibility course and reference to level up your web development.",
        playlist: {
            learningActivities: [
                {
                    url: "https://web.dev/learn/accessibility/welcome",
                    title: "Welcome to Learn Accessibility!",
                    description:
                        "An evergreen accessibility course and reference to level up your web development.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/why",
                    title: "What is digital accessibility, and why does it matter?",
                    description:
                        "Design and build websites and web apps so that disabled people can interact in a meaningful and equivalent way. Read about the business and legal impact of these choices.\n",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/measure",
                    title: "How is digital accessibility measured?",
                    description:
                        "Introduction to accessibility measurement, which ensures everyone, including people with disabilities, can still interact with your website in a meaningful and equal way.\n",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/aria-html",
                    title: "ARIA and HTML",
                    description: "When to use ARIA versus HTML.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/structure",
                    title: "Content structure",
                    description:
                        "Use semantic HTML, landmarks, and tables for accessible content.\n",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/more-html",
                    title: "The Document",
                    description:
                        "Additional HTML elements to consider when building accessible websites and web apps.\n",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/focus",
                    title: "Keyboard focus",
                    description:
                        "Understand and enhance keyboard navigation order and style.\n",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/javascript",
                    title: "JavaScript",
                    description:
                        "Write accessible trigger events, page titles, dynamic content, and more.\n",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/images",
                    title: "Images",
                    description: "Create accessible images.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/color-contrast",
                    title: "Color and contrast",
                    description:
                        "Build accessible color palettes with appropriate contrast.\n",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/motion",
                    title: "Animation and motion",
                    description:
                        "Support people with all types of movement-triggered disorders.\n",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/typography",
                    title: "Typography",
                    description:
                        "Pick the right typefaces, font sizes, and structure your copy with an accessible layout.\n",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/video-audio",
                    title: "Video and audio",
                    description:
                        "Alternative media types which make your video and audio accessible.\n",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/forms",
                    title: "Forms",
                    description: "Create accessible forms.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/patterns",
                    title: "Patterns, components, and design systems",
                    description:
                        "Evaluate patterns, components, and design systems for accessibility.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/design-ux",
                    title: "Design and user experience",
                    description:
                        "Create accessible designs and evaluate your user's experience.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/test-automated",
                    title: "Automated accessibility testing",
                    description:
                        "How to perform automated accessibility testing.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/test-manual",
                    title: "Manual accessibility testing",
                    description: "How to manually test for accessibility.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/test-assistive-technology",
                    title: "Assistive Technology testing",
                    description: "How to test with Assistive Technology (AT).",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/conclusion",
                    title: "Conclusion and next steps",
                    description:
                        "Further resources to help you take your next steps.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/accessibility/glossary",
                    title: "Glossary",
                    description:
                        "Learn common accessibility terms and concepts.",
                    page: {},
                },
            ],
        },
    },
    {
        url: "https://web.dev/learn/design",
        title: "Learn Responsive Design",
        description:
            "A course exploring all aspects of responsive design. Learn how to make sites that look great and work well for everyone.",
        playlist: {
            learningActivities: [
                {
                    url: "https://web.dev/learn/design/welcome",
                    title: "Welcome to Learn Responsive Design!",
                    description:
                        "A course exploring all aspects of responsive design. Learn how to make sites that look great and work well for everyone.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/design/intro",
                    title: "Introduction",
                    description: "Find out where responsive design came from.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/design/media-queries",
                    title: "Media queries",
                    description:
                        "Adapt your designs to different screen sizes using CSS media queries.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/design/internationalization",
                    title: "Internationalization",
                    description:
                        "Prepare your designs for different languages and writing modes.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/design/macro-layouts",
                    title: "Macro layouts",
                    description:
                        "Design page layouts using a choice of CSS techniques.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/design/micro-layouts",
                    title: "Micro layouts",
                    description:
                        "Build flexible components that can be placed anywhere.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/design/typography",
                    title: "Typography",
                    description:
                        "Make your text legible and beautiful, no matter where it appears.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/design/responsive-images",
                    title: "Responsive images",
                    description:
                        "Give your visitors the most appropriate images for their devices and screens.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/design/picture-element",
                    title: "The picture element",
                    description:
                        "Exercise more creative control over your images.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/design/icons",
                    title: "Icons",
                    description: "Use SVG for scalable responsive iconography.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/design/theming",
                    title: "Theming",
                    description:
                        "Adapt your designs to match user preferences such as a dark mode.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/design/accessibility",
                    title: "Accessibility",
                    description:
                        "Ensure that your website is available to everyone.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/design/interaction",
                    title: "Interaction",
                    description:
                        "Prepare your pages for different input mechanisms; mouse, keyboard, and touch.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/design/ui-patterns",
                    title: "User interface patterns",
                    description:
                        "Consider some common UI elements that adapt to different screen sizes.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/design/media-features",
                    title: "Media features",
                    description:
                        "A round-up of all the ways that media features let you respond to devices and preferences.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/design/screen-configurations",
                    title: "Screen configurations",
                    description:
                        "Prepare your content for devices with multiple screens.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/design/conclusion",
                    title: "Conclusion and next steps",
                    description:
                        "Further resources to help you take your next steps.",
                    page: {},
                },
            ],
        },
    },
    {
        url: "https://web.dev/learn/forms",
        title: "Learn Forms",
        description:
            "A course about HTML forms to help you improve your web developer expertise.",
        playlist: {
            learningActivities: [
                {
                    url: "https://web.dev/learn/forms/welcome",
                    title: "Welcome to Learn Forms!",
                    description:
                        "A course about HTML forms to help you improve your web developer expertise.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/form-element",
                    title: "Use forms to get data from users",
                    description:
                        "Learn the basics of using a form on the web with this introduction to the form element.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/form-fields",
                    title: "Help users enter data in forms",
                    description:
                        "An overview of the various form elements you can choose from to build your form.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/auto",
                    title: "Help users avoid re-entering data in forms",
                    description:
                        "Make it more convenient for users to fill out forms.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/validation",
                    title: "Help users enter the right data in forms",
                    description:
                        "Learn how to validate your forms on the frontend.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/testing",
                    title: "Test your forms",
                    description: "Learn how to test and analyze your forms.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/design-basics",
                    title: "Design basics",
                    description: "Learn how to build user-friendly forms.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/accessibility",
                    title: "Accessibility",
                    description: "How to build inclusive forms.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/internationalization",
                    title: "Internationalization and localization",
                    description:
                        "Be prepared for international data formats, and learn how to plan your form for localization.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/security-privacy",
                    title: "Security and privacy",
                    description:
                        "Learn how to make your forms secure and keep your users' data private.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/autofill",
                    title: "Autofill",
                    description:
                        "Learn all about autofill and the autocomplete attribute.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/usability-testing",
                    title: "How to test forms for usability",
                    description:
                        "Discover how to do usability testing and ensure your form works well for all your users.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/cross-platform-testing",
                    title: "Test forms across devices and platforms",
                    description:
                        "Ensure your form works with different devices, browsers, platforms, and different contexts.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/data",
                    title: "Gathering data",
                    description: "Learn how to measure and analyze your form.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/form",
                    title: "The form element in depth",
                    description:
                        "Learn all about the form element, when you should use a form, and how a form works in detail.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/fields",
                    title: "Form fields in depth",
                    description:
                        "Learn about the different form fields you can use, and how to choose the right form element.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/attributes",
                    title: "Form attributes in depth",
                    description:
                        "Learn all about form attributes, how to modify the layout of on-screen keyboards, activate built-in validation, and more.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/styling",
                    title: "Styling forms",
                    description:
                        "Style forms using CSS, while ensuring they remain usable and readable for everyone.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/styling-form-controls",
                    title: "Styling form controls",
                    description:
                        "Learn how to implement form controls with CSS.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/javascript",
                    title: "JavaScript",
                    description:
                        "Find out how to use JavaScript to enhance your forms.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/identity",
                    title: "Identity",
                    description:
                        "Find out how to set up your forms using best practices for user authentication.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/payment",
                    title: "Payment forms",
                    description:
                        "Improve conversion rates by building better payment forms.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/address",
                    title: "Address forms",
                    description:
                        "Help users fill out address forms quickly and easily.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/forms/conclusion",
                    title: "Conclusion and next steps",
                    description:
                        "Further resources to help you take your next steps.",
                    page: {},
                },
            ],
        },
    },
    {
        url: "https://web.dev/learn/html",
        title: "Learn HTML",
        description:
            "This HTML course for web developers provides a solid overview for developers, from novice to expert level HTML.",
        playlist: {
            learningActivities: [
                {
                    url: "https://web.dev/learn/html/welcome",
                    title: "Welcome to Learn HTML!",
                    description:
                        "This HTML course for web developers provides a solid overview for developers, from novice to expert level HTML.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/overview",
                    title: "Overview of HTML",
                    description:
                        "A brief introduction to the key concepts in HTML.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/document-structure",
                    title: "Document structure",
                    description:
                        "Learn how to structure your HTML documents with a solid foundation.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/metadata",
                    title: "Metadata",
                    description:
                        "How to use meta tags to provide information about your documents.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/semantic-html",
                    title: "Semantic HTML",
                    description:
                        "Using the correct HTML elements to describe your document content.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/headings-and-sections",
                    title: "Headings and sections",
                    description:
                        "How to correctly use sectioning elements to give meaning to your content.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/attributes",
                    title: "Attributes",
                    description:
                        "Learn about the different global attributes along with attributes specific to particular HTML elements.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/text-basics",
                    title: "Text basics",
                    description: "How to format text using HTML.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/links",
                    title: "Links",
                    description: "Everything you need to know about links.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/lists",
                    title: "Lists",
                    description:
                        "Lists and other ways of grouping your content.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/navigation",
                    title: "Navigation",
                    description:
                        "Navigation is a key element of any site of application, and it starts with HTML.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/tables",
                    title: "Tables",
                    description:
                        "Understanding how to use tables to mark up tabular data.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/forms",
                    title: "Forms",
                    description: "An overview of forms in HTML.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/images",
                    title: "Images",
                    description: "An overview of images in HTML.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/audio-video",
                    title: "Audio and Video",
                    description:
                        "Discover how to work with HTML media such as audio and video.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/template",
                    title: "Template, slot, and shadow",
                    description:
                        "An explanation of template, slot, and shadow.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/apis",
                    title: "HTML APIs",
                    description:
                        "Learn how HTML information can be exposed and manipulated using JavaScript.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/focus",
                    title: "Focus",
                    description:
                        "How to manage focus order in your HTML documents.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/inline-text",
                    title: "Other inline text elements",
                    description:
                        "An introduction to the range of elements used to mark-up text.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/details",
                    title: "Details and summary",
                    description:
                        "Discover how the very useful details and summary elements work, and where to use them.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/dialog",
                    title: "Dialog",
                    description:
                        "The \u003cdialog\u003e element is useful for representing any kind of dialog in HTML. Find out how it works.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/html/conclusion",
                    title: "Conclusion and next steps",
                    description: "Wrapping up with some further resources.",
                    page: {},
                },
            ],
        },
    },
    {
        url: "https://web.dev/learn/testing",
        title: "Learn Testing",
        description: "An in-depth course on software testing.",
        playlist: {
            learningActivities: [
                {
                    url: "https://web.dev/learn/testing/welcome",
                    title: "Welcome to Learn Testing!",
                    description: "An in-depth course on software testing.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/testing/get-started/what-testing-is",
                    title: "What testing is",
                    description: "A high-level introduction to testing.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/testing/get-started/where-tests-run",
                    title: "Where tests run",
                    description:
                        "Learn how to run tests manually or as part of an automated process.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/testing/get-started/testing-environment",
                    title: "The testing environment",
                    description:
                        "Learn to use runtime tools for testing, as well as specialized frameworks for testing code in browsers.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/testing/get-started/test-types",
                    title: "Types of automated testing",
                    description:
                        "Learn about common categorizations of test types.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/testing/get-started/what-to-test",
                    title: "What to test and your approach",
                    description: "Learn how to assess your code for testing.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/testing/get-started/component-testing",
                    title: "Component testing in practice",
                    description:
                        "Examples of test design for a React component with complex dependencies.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/testing/get-started/static-analysis",
                    title: "Static analysis",
                    description:
                        "Learn to use linter tools for basic automated testing.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/testing/assertions/tools",
                    title: "Tools of the trade",
                    description:
                        "Learn about assertions and other primitives common to most testing frameworks.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/testing/appendix",
                    title: "Appendix",
                    description:
                        "Additional information that might be helpful on your test development journey.",
                    page: {},
                },
                {
                    url: "https://web.dev/learn/testing/coming-soon",
                    title: "Coming Soon",
                    description:
                        "Stay tuned for more information about testing!",
                    page: {},
                },
            ],
        },
    },
];

export default data;
