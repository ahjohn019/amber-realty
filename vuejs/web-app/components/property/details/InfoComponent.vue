<template>
    <div class="col-12 row justify-between items-center pt-8 q-gutter-y-md">
        <div class="col-12 pl-2" :class="$q.screen.lt.md ? 'text-center' : ''">
            <div class="text-4xl">
                {{ propertyDetailsData.name }}
            </div>
        </div>
        <div
            class="col-12"
            :class="$q.screen.lt.md ? 'text-center' : ''"
            v-if="propertyDetailsData.details"
        >
            <div class="text-sm">
                <q-chip
                    color="teal"
                    text-color="white"
                    :icon="room.icon"
                    v-for="(room, key) in propertyRoomDetails"
                    :key="key"
                >
                    {{ propertyDetailsData.details[room.value] }}
                    {{ room.name }}
                </q-chip>
            </div>
        </div>
        <div
            class="col-12 pl-2"
            :class="$q.screen.lt.md ? 'grid place-content-center' : ''"
        >
            <div
                class="bg-secondary featured-label text-center py-2 px-4 font-bold rounded capitalize w-[100px]"
            >
                For
                {{ propertyDetailsData.listing_type }}
            </div>
        </div>
        <div class="col-12 pl-2" :class="$q.screen.lt.md ? 'text-center' : ''">
            <span class="text-xl font-bold"
                >MYR {{ propertyDetailsData.price }}</span
            >
        </div>

        <!-- <div
            class="row col-12"
            :class="$q.screen.lt.md ? 'justify-center' : 'justify-end'"
        >
            <q-chip
                color="primary"
                text-color="white"
                v-for="(contact, key) in contactNumber"
                :key="key"
            >
                <a
                    :href="
                        'https://wa.me/' +
                        contact.contact +
                        '?text=' +
                        encodeURIComponent(whatsAppEnquiries)
                    "
                    target="_blank"
                >
                    <q-img
                        src="/images/amber_whatsapp.png"
                        alt=""
                        width="20px"
                    />
                    <span class="align-middle ml-2 text-sm">{{
                        contact.name
                    }}</span>
                </a>
            </q-chip>
        </div> -->
    </div>
</template>

<script>
export default {
    props: [
        'propertyDetailsData',
        'propertyRoomDetails',
        'contactNumber',
        'whatsAppEnquiries',
    ],
};
</script>
