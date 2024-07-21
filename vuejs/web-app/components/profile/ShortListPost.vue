<script setup>
import { usePropertyAuthWebStore } from '@store_web/auth/index.js';
import { ref } from 'vue';

const webAuthProperty = usePropertyAuthWebStore();
const getAuthToken = webAuthProperty.fetchSessionToken();
const shortLists = ref([]);

const props = defineProps(['userProfileProperty']);
shortLists.value = props.userProfileProperty;

const numberFormat = (number, symbol = 'RM') => {
    const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(number);

    return `${symbol}${formattedNumber}`;
};

const handleShortListToggle = async (shortlist) => {
    const params = {
        id: shortlist.id,
        status: false,
    };

    try {
        const response = await webAuthProperty.toggleShortListPosts(
            getAuthToken,
            params
        );

        const shortlistIndex = shortLists.value.findIndex(
            (item) => item.id === parseInt(response.post_id)
        );

        shortLists.value.splice(shortlistIndex, 1);

        return response;
    } catch (error) {}
};
</script>

<template>
    <div
        v-for="(shortlist, key) in shortLists"
        :key="key"
        class="row gap-4 py-4 justify-center"
    >
        <div class="col-12 col-md-3 col-auto">
            <q-img
                :src="
                    shortlist.banner_url
                        ? shortlist.banner_url
                        : 'https://cdn.quasar.dev/img/parallax2.jpg'
                "
            />
        </div>
        <div class="col-12 col-md-8 col-auto row">
            <div class="col">
                <div class="flex justify-between items-center">
                    <div class="font-bold text-lg">
                        {{ shortlist.name }}
                    </div>
                    <div>
                        <q-btn
                            round
                            color="primary"
                            icon="close"
                            size="10px"
                            @click="handleShortListToggle(shortlist)"
                        />
                    </div>
                </div>
                <div>{{ shortlist.short_description }}</div>
                <div class="font-bold text-lg text-primary">
                    {{ numberFormat(shortlist.price, 'RM ') }}
                </div>
            </div>
        </div>
    </div>
</template>
