import {
    l as K,
    E as Q,
    d as ie,
    u as de,
    ai as Z,
    a as J,
    B as $,
    r as m,
    n as S,
    x as k,
    D as s,
    s as _,
    a0 as ce,
    H as W,
    a5 as pe,
    A as t,
    F as q,
    G as v,
    m as A,
    a7 as g,
    a6 as ue,
} from './ckeditor-2db82a36.js';
import { c as me, Q as _e } from './vm-8acb4ab5.js';
import { u as fe, a as ye, b as ve } from './use-checkbox-5f3c2cd8.js';
import { Q as D } from './QInput-92c09ed8.js';
import { Q as x } from './QSelect-bed325f1.js';
import { Q as C } from './QBtn-7730d556.js';
import { C as he, D as ge, u as De } from './refList-0a28c396.js';
import { a as be, u as xe } from './index-2eeab280.js';
import { S as M, u as ee } from './app-45ebcf0a.js';
import { Q as Ve, a as Ce } from './QCardActions-10222370.js';
import { Q as V } from './QCardSection-179f6214.js';
import { Q as Se } from './QImg-c1b5f080.js';
import { Q as E } from './QChip-5d519ab4.js';
import { Q as X } from './QCard-e317547d.js';
import { Q as ke } from './QDialog-e6831ada.js';
import { C as Pe } from './ClosePopup-c862ef9f.js';
import './option-sizes-38d363f3.js';
import './use-key-composition-fefc29af.js';
import './QMenu-5921cef6.js';
import './use-tick-c308625a.js';
import './rtl-36dd996b.js';
import './format-7985d814.js';
import './use-prevent-scroll-980b8771.js';
const Fe = me({
        name: 'QToggle',
        props: { ...fe, icon: String, iconColor: String },
        emits: ye,
        setup(l) {
            function o(i, e) {
                const d = K(
                        () =>
                            (i.value === !0
                                ? l.checkedIcon
                                : e.value === !0
                                ? l.indeterminateIcon
                                : l.uncheckedIcon) || l.icon
                    ),
                    p = K(() => (i.value === !0 ? l.iconColor : null));
                return () => [
                    Q('div', { class: 'q-toggle__track' }),
                    Q(
                        'div',
                        {
                            class: 'q-toggle__thumb absolute flex flex-center no-wrap',
                        },
                        d.value !== void 0
                            ? [Q(_e, { name: d.value, color: p.value })]
                            : void 0
                    ),
                ];
            }
            return ve('toggle', o);
        },
    }),
    Y = '/api/server-files/',
    we = ie('server_image_admin', {
        state: () => ({ post_image_admin: null, router: de(), route: Z() }),
        actions: {
            async updateFiles(l, o) {
                const i = {
                    headers: {
                        Authorization: `Bearer ${o}`,
                        'Content-Type': 'multipart/form-data',
                    },
                };
                try {
                    const e = await J.post(Y + 'update', l, i);
                    return (
                        M.fire({
                            text: 'Image Update Successfully',
                            icon: 'success',
                        }).then((d) => {
                            d.isConfirmed && this.router.go(0);
                        }),
                        e.data
                    );
                } catch (e) {
                    return (
                        M.fire({
                            title: e.response.data.data,
                            text: e.response.data.message,
                            icon: 'error',
                        }),
                        e.response
                    );
                }
            },
            async deleteFiles(l, o) {
                const i = {
                    headers: {
                        Authorization: `Bearer ${o}`,
                        'Content-Type': 'multipart/form-data',
                    },
                };
                try {
                    const e = await J.post(Y + 'delete', l, i);
                    return (
                        M.fire({
                            text: 'Image Deleted Successfully',
                            icon: 'success',
                        }).then((d) => {
                            d.isConfirmed && this.router.go(0);
                        }),
                        e.data
                    );
                } catch (e) {
                    throw (console.error('Error:', e), e);
                }
            },
            handleMultipleImageChange(l, o) {
                const i = o.target,
                    e = i.id,
                    d = i.files[0],
                    p = i.getAttribute('file_index'),
                    a = i.getAttribute('module_path'),
                    c = l.value.find((f) => f.id === e && f.module_path === a);
                return (
                    l.value.includes(c)
                        ? (l.value[p].file = d)
                        : l.value.push({ id: e, file: d, module_path: a }),
                    l
                );
            },
        },
    });
const Te = {
        props: ['property'],
        setup(l) {
            const o = ee(),
                i = we(),
                e = o.fetchSessionToken(),
                d = m(!1),
                p = m([]),
                a = [l.property.banner, ...l.property.sliders].filter(
                    (y) => y !== null
                );
            return {
                existImageModal: d,
                updateFileData: async () => {
                    const y = await i.updateFiles(p.value, e);
                    return (d.value = !1), y;
                },
                onFileChange: (y) => i.handleMultipleImageChange(p, y),
                handleDeleteFile: async (y) => {
                    const b = await i.deleteFiles(y, e);
                    return (d.value = !1), b;
                },
                finalFiles: a,
            };
        },
    },
    Ie = t('div', { class: 'text-h5' }, 'Edit', -1),
    Ue = { class: 'col row' },
    Qe = { class: 'col' },
    qe = { class: 'text-subtitle1 break-words' },
    Ae = { class: 'text-subtitle2' },
    Me = { class: 'text-subtitle2' },
    Ee = ['id', 'module_path', 'file_index'];
function Be(l, o, i, e, d, p) {
    return (
        S(),
        k(
            W,
            null,
            [
                s(C, {
                    label: 'Edit',
                    color: 'primary',
                    onClick: o[0] || (o[0] = (a) => (e.existImageModal = !0)),
                    class: 'edit-image-form__button',
                }),
                s(
                    ke,
                    {
                        modelValue: e.existImageModal,
                        'onUpdate:modelValue':
                            o[2] || (o[2] = (a) => (e.existImageModal = a)),
                    },
                    {
                        default: _(() => [
                            s(X, null, {
                                default: _(() => [
                                    s(
                                        V,
                                        { class: 'row items-center' },
                                        {
                                            default: _(() => [
                                                Ie,
                                                s(Ve),
                                                ce(
                                                    s(
                                                        C,
                                                        {
                                                            icon: 'close',
                                                            flat: '',
                                                            round: '',
                                                            dense: '',
                                                        },
                                                        null,
                                                        512
                                                    ),
                                                    [[Pe]]
                                                ),
                                            ]),
                                            _: 1,
                                        }
                                    ),
                                    s(
                                        V,
                                        {
                                            class: 'q-pt-none q-gutter-y-lg row',
                                        },
                                        {
                                            default: _(() => [
                                                (S(!0),
                                                k(
                                                    W,
                                                    null,
                                                    pe(
                                                        e.finalFiles,
                                                        (a, c) => (
                                                            S(),
                                                            k(
                                                                'div',
                                                                {
                                                                    class: 'col-12 row items-center',
                                                                    key: c,
                                                                },
                                                                [
                                                                    t(
                                                                        'div',
                                                                        Ue,
                                                                        [
                                                                            t(
                                                                                'div',
                                                                                Qe,
                                                                                [
                                                                                    s(
                                                                                        X,
                                                                                        {
                                                                                            class: 'my-card',
                                                                                        },
                                                                                        {
                                                                                            default:
                                                                                                _(
                                                                                                    () => [
                                                                                                        s(
                                                                                                            Se,
                                                                                                            {
                                                                                                                src: a
                                                                                                                    .image
                                                                                                                    .url,
                                                                                                                ratio:
                                                                                                                    16 /
                                                                                                                    9,
                                                                                                                fit: 'contain',
                                                                                                            },
                                                                                                            null,
                                                                                                            8,
                                                                                                            [
                                                                                                                'src',
                                                                                                            ]
                                                                                                        ),
                                                                                                        s(
                                                                                                            V,
                                                                                                            null,
                                                                                                            {
                                                                                                                default:
                                                                                                                    _(
                                                                                                                        () => [
                                                                                                                            t(
                                                                                                                                'div',
                                                                                                                                qe,
                                                                                                                                [
                                                                                                                                    s(
                                                                                                                                        E,
                                                                                                                                        {
                                                                                                                                            color: 'primary',
                                                                                                                                            'text-color':
                                                                                                                                                'white',
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            default:
                                                                                                                                                _(
                                                                                                                                                    () => [
                                                                                                                                                        q(
                                                                                                                                                            v(
                                                                                                                                                                a
                                                                                                                                                                    .image
                                                                                                                                                                    .name
                                                                                                                                                            ),
                                                                                                                                                            1
                                                                                                                                                        ),
                                                                                                                                                    ]
                                                                                                                                                ),
                                                                                                                                            _: 2,
                                                                                                                                        },
                                                                                                                                        1024
                                                                                                                                    ),
                                                                                                                                ]
                                                                                                                            ),
                                                                                                                            t(
                                                                                                                                'div',
                                                                                                                                Ae,
                                                                                                                                [
                                                                                                                                    s(
                                                                                                                                        E,
                                                                                                                                        {
                                                                                                                                            color: 'teal',
                                                                                                                                            'text-color':
                                                                                                                                                'white',
                                                                                                                                            icon: 'bookmark',
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            default:
                                                                                                                                                _(
                                                                                                                                                    () => [
                                                                                                                                                        q(
                                                                                                                                                            v(
                                                                                                                                                                Math.round(
                                                                                                                                                                    a
                                                                                                                                                                        .image
                                                                                                                                                                        .size /
                                                                                                                                                                        1e3
                                                                                                                                                                ) +
                                                                                                                                                                    'kb'
                                                                                                                                                            ),
                                                                                                                                                            1
                                                                                                                                                        ),
                                                                                                                                                    ]
                                                                                                                                                ),
                                                                                                                                            _: 2,
                                                                                                                                        },
                                                                                                                                        1024
                                                                                                                                    ),
                                                                                                                                ]
                                                                                                                            ),
                                                                                                                            t(
                                                                                                                                'div',
                                                                                                                                Me,
                                                                                                                                [
                                                                                                                                    s(
                                                                                                                                        E,
                                                                                                                                        {
                                                                                                                                            color: 'teal',
                                                                                                                                            'text-color':
                                                                                                                                                'white',
                                                                                                                                            icon: 'bookmark',
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            default:
                                                                                                                                                _(
                                                                                                                                                    () => [
                                                                                                                                                        q(
                                                                                                                                                            v(
                                                                                                                                                                a
                                                                                                                                                                    .image
                                                                                                                                                                    .module_path
                                                                                                                                                            ),
                                                                                                                                                            1
                                                                                                                                                        ),
                                                                                                                                                    ]
                                                                                                                                                ),
                                                                                                                                            _: 2,
                                                                                                                                        },
                                                                                                                                        1024
                                                                                                                                    ),
                                                                                                                                ]
                                                                                                                            ),
                                                                                                                        ]
                                                                                                                    ),
                                                                                                                _: 2,
                                                                                                            },
                                                                                                            1024
                                                                                                        ),
                                                                                                        s(
                                                                                                            V,
                                                                                                            {
                                                                                                                class: 'justify-center flex',
                                                                                                            },
                                                                                                            {
                                                                                                                default:
                                                                                                                    _(
                                                                                                                        () => [
                                                                                                                            s(
                                                                                                                                V,
                                                                                                                                {
                                                                                                                                    class: 'col-8',
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    default:
                                                                                                                                        _(
                                                                                                                                            () => [
                                                                                                                                                t(
                                                                                                                                                    'input',
                                                                                                                                                    {
                                                                                                                                                        type: 'file',
                                                                                                                                                        multiple:
                                                                                                                                                            '',
                                                                                                                                                        name: 'file',
                                                                                                                                                        id: a.id,
                                                                                                                                                        module_path:
                                                                                                                                                            a
                                                                                                                                                                .image
                                                                                                                                                                .module_path,
                                                                                                                                                        file_index:
                                                                                                                                                            c,
                                                                                                                                                        class: 'hidden-input',
                                                                                                                                                        onChange:
                                                                                                                                                            o[1] ||
                                                                                                                                                            (o[1] =
                                                                                                                                                                (
                                                                                                                                                                    ...f
                                                                                                                                                                ) =>
                                                                                                                                                                    e.onFileChange &&
                                                                                                                                                                    e.onFileChange(
                                                                                                                                                                        ...f
                                                                                                                                                                    )),
                                                                                                                                                        ref_for:
                                                                                                                                                            !0,
                                                                                                                                                        ref: 'currentFile',
                                                                                                                                                        accept: '.pdf,.jpg,.jpeg,.png',
                                                                                                                                                    },
                                                                                                                                                    null,
                                                                                                                                                    40,
                                                                                                                                                    Ee
                                                                                                                                                ),
                                                                                                                                            ]
                                                                                                                                        ),
                                                                                                                                    _: 2,
                                                                                                                                },
                                                                                                                                1024
                                                                                                                            ),
                                                                                                                        ]
                                                                                                                    ),
                                                                                                                _: 2,
                                                                                                            },
                                                                                                            1024
                                                                                                        ),
                                                                                                        s(
                                                                                                            V,
                                                                                                            {
                                                                                                                class: 'justify-center flex',
                                                                                                            },
                                                                                                            {
                                                                                                                default:
                                                                                                                    _(
                                                                                                                        () => [
                                                                                                                            s(
                                                                                                                                C,
                                                                                                                                {
                                                                                                                                    size: '14px',
                                                                                                                                    round: '',
                                                                                                                                    color: 'red',
                                                                                                                                    icon: 'delete',
                                                                                                                                    onClick:
                                                                                                                                        (
                                                                                                                                            f
                                                                                                                                        ) =>
                                                                                                                                            e.handleDeleteFile(
                                                                                                                                                a
                                                                                                                                            ),
                                                                                                                                },
                                                                                                                                null,
                                                                                                                                8,
                                                                                                                                [
                                                                                                                                    'onClick',
                                                                                                                                ]
                                                                                                                            ),
                                                                                                                        ]
                                                                                                                    ),
                                                                                                                _: 2,
                                                                                                            },
                                                                                                            1024
                                                                                                        ),
                                                                                                    ]
                                                                                                ),
                                                                                            _: 2,
                                                                                        },
                                                                                        1024
                                                                                    ),
                                                                                ]
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            )
                                                        )
                                                    ),
                                                    128
                                                )),
                                            ]),
                                            _: 1,
                                        }
                                    ),
                                    s(
                                        Ce,
                                        { align: 'right' },
                                        {
                                            default: _(() => [
                                                s(
                                                    C,
                                                    {
                                                        label: 'Update',
                                                        class: 'text-white bg-primary update-form__button',
                                                        onClick:
                                                            e.updateFileData,
                                                    },
                                                    null,
                                                    8,
                                                    ['onClick']
                                                ),
                                            ]),
                                            _: 1,
                                        }
                                    ),
                                ]),
                                _: 1,
                            }),
                        ]),
                        _: 1,
                    },
                    8,
                    ['modelValue']
                ),
            ],
            64
        )
    );
}
const je = $(Te, [['render', Be]]);
const Le = {
        components: { CkeditorPlugin: he, DropFile: ge, ExistImageModal: je },
        async setup() {
            var G, H;
            const l = Z(),
                o = ((G = l.query) == null ? void 0 : G.type) || null,
                i = ((H = l.query) == null ? void 0 : H.id) || null,
                e = be(),
                d = De(),
                p = xe(),
                a = m(e.fetchPropertyData()),
                c = m(e.fetchPropertyDetailsData()),
                f = m(e.fetchPropertyError()),
                r = m([]),
                y = m(0),
                b = m(!1),
                B = m([]),
                j = m([]),
                te = m(null),
                L = m(''),
                R = m(''),
                oe = m(!1),
                P = ee().fetchSessionToken(),
                F = e.fetchTenureData(),
                w = e.fetchFurnishingData(),
                T = e.fetchListingTypeData(),
                N = e.fetchStatusData();
            (a.value.listing_type = T.find((n) => n.slug === 'sale')),
                (a.value.status = N.find((n) => n.slug === 'active')),
                (c.value.tenure = F.find((n) => n.slug === 'freehold')),
                (c.value.furnishing = w.find((n) => n.slug === 'unfurnished'));
            const z = async () => {
                    const n = await d.fetchStateList(P);
                    B.value = n;
                },
                I = async () => {
                    const n = await d.fetchPropertyTypes(P);
                    return (j.value = n), n;
                },
                ae = () => ((y.value = b.value ? 1 : 0), y.value),
                se = (n) => {
                    a.value = {
                        ...a.value,
                        images: n.files,
                        module_path: n.module_path,
                    };
                },
                le = (n) => {
                    (L.value = URL.createObjectURL(n.target.files[0])),
                        (R.value = n.target.files[0]);
                },
                re = (n) => {
                    a.value.description = n;
                },
                O = async () => {
                    const n = await I(),
                        u = await p.findProperty(P, i),
                        { details: h } = u;
                    (a.value = {
                        ...a.value,
                        name: u.name,
                        description: u.description,
                        short_description: u.short_description,
                        state: u.state,
                        price: u.price,
                        file: u.file,
                        banner: u.banner,
                        sliders: u.sliders,
                        listing_type: u.listing_type,
                        details: u.details_toggle,
                        property_types: p.handleFilteredPropertyDetails(
                            n,
                            u.type,
                            'propertyType'
                        ),
                    }),
                        (a.value.short_description =
                            a.value.short_description.replace(/<[^>]+>/g, '')),
                        (a.value.listing_type = T.find(
                            (U) => U.slug === a.value.listing_type
                        )),
                        (b.value = a.value.details),
                        (c.value = {
                            ...c.value,
                            tenure: p.handleFilteredPropertyDetails(
                                F,
                                h.tenure
                            ),
                            square_feet: h.square_feet,
                            furnishing: p.handleFilteredPropertyDetails(
                                w,
                                h.furnishing
                            ),
                            bedroom: h.bedroom,
                            bathroom: h.bathroom,
                            car_park: h.car_park,
                        });
                },
                ne = async () => {
                    if (
                        ((a.value = {
                            ...a.value,
                            property_details: b.value ? 1 : 0,
                            banner_url: R.value,
                        }),
                        a.value.property_details > 0)
                    )
                        a.value = { ...a.value, ...c.value };
                    else {
                        const u = Object.keys(c.value),
                            h = Object.fromEntries(
                                Object.entries(a.value).filter(
                                    ([U]) => !u.includes(U)
                                )
                            );
                        a.value = h;
                    }
                    return await p.createProperty(P, a.value, f);
                };
            return (
                o === 'update' && (await O()),
                await z(),
                await I(),
                {
                    findProperty: O,
                    propertyData: a,
                    propertyDetailsData: c,
                    submitData: ne,
                    updateParentFiles: se,
                    updateDescriptions: re,
                    propertyDetailsToggle: b,
                    handlePropertyDetails: ae,
                    options: r,
                    errors: f,
                    tenure: F,
                    furnishing: w,
                    listingType: T,
                    status: N,
                    state: B,
                    property_types: j,
                    stateList: z,
                    propertyTypesList: I,
                    mainImage: te,
                    bannerUrl: L,
                    updateMainImage: le,
                    routeType: o,
                    existImageModal: oe,
                }
            );
        },
    },
    Re = { class: 'row' },
    Ne = { class: 'col-12 row pb-4' },
    ze = t('div', { class: 'col text-2xl' }, 'Property Form', -1),
    Oe = { class: 'col text-right' },
    Ge = t('span', { class: 'font-bold' }, 'Details', -1),
    He = { class: 'col-12 row bg-white p-5 font-bold gap-y-4' },
    Ke = { class: 'col-12 post-information-name pb-2' },
    Je = { class: 'col-12' },
    We = t('div', { class: 'post-information-name' }, 'Name', -1),
    Xe = { class: 'col-12' },
    Ye = { class: 'col-12 text-red-700 pt-2' },
    Ze = { class: 'col-12' },
    $e = t('div', { class: 'post-information-name' }, 'Descriptions', -1),
    et = { class: 'col-12 prose max-w-none prose-strong:font-black' },
    tt = { class: 'col-12 text-red-700 pt-2' },
    ot = { class: 'col-12' },
    at = t('div', { class: 'post-information-name' }, 'Short Descriptions', -1),
    st = { class: 'col-12' },
    lt = { class: 'col-12 text-red-700 pt-2' },
    rt = t('div', { class: 'post-information-name' }, 'Status', -1),
    nt = { class: 'col-12 col-md-6' },
    it = t('div', { class: 'post-information-name' }, 'Types', -1),
    dt = { class: 'col-12 text-red-700 pt-2' },
    ct = t('div', { class: 'post-information-name' }, 'State', -1),
    pt = { class: 'col-12 text-red-700 pt-2' },
    ut = { class: 'col-12 col-md-6' },
    mt = t('div', { class: 'post-information-name' }, 'Price', -1),
    _t = t('div', { class: 'post-information-name' }, 'Listing Type', -1),
    ft = t('div', { class: 'post-information-name' }, 'Tenure', -1),
    yt = { class: 'col-12 col-md-6' },
    vt = t('div', { class: 'post-information-name' }, 'Square Feet', -1),
    ht = t('div', { class: 'post-information-name' }, 'Furnished Type', -1),
    gt = t('div', { class: 'post-information-name' }, 'Bathroom', -1),
    Dt = t('div', { class: 'post-information-name' }, 'Bedroom', -1),
    bt = { class: 'col-12 col-md-6' },
    xt = t('div', { class: 'post-information-name' }, 'Car Park', -1),
    Vt = { class: 'col-12' },
    Ct = { class: 'flex justify-between py-2' },
    St = t('div', { class: 'post-information__name' }, 'Images', -1),
    kt = { key: 0 },
    Pt = { class: 'col-12 text-red-700 pt-2' },
    Ft = { class: 'col-12 text-right' };
function wt(l, o, i, e, d, p) {
    const a = A('CkeditorPlugin'),
        c = A('ExistImageModal'),
        f = A('DropFile');
    return (
        S(),
        k('div', Re, [
            t('div', Ne, [
                ze,
                t('div', Oe, [
                    Ge,
                    s(
                        Fe,
                        {
                            modelValue: e.propertyDetailsToggle,
                            'onUpdate:modelValue':
                                o[0] ||
                                (o[0] = (r) => (e.propertyDetailsToggle = r)),
                            color: 'green',
                            onClick: e.handlePropertyDetails,
                        },
                        null,
                        8,
                        ['modelValue', 'onClick']
                    ),
                ]),
            ]),
            t('div', He, [
                t(
                    'div',
                    Ke,
                    v(e.routeType == 'update' ? 'Update' : 'Create') +
                        ' Property ',
                    1
                ),
                t('div', Je, [
                    We,
                    t('div', Xe, [
                        s(
                            D,
                            {
                                dense: '',
                                outlined: '',
                                label: 'Name',
                                modelValue: e.propertyData.name,
                                'onUpdate:modelValue':
                                    o[1] ||
                                    (o[1] = (r) => (e.propertyData.name = r)),
                                ref: 'nameRef',
                            },
                            null,
                            8,
                            ['modelValue']
                        ),
                    ]),
                    t('div', Ye, v(e.errors.name), 1),
                ]),
                t('div', Ze, [
                    $e,
                    t('div', et, [
                        s(
                            a,
                            {
                                description: e.propertyData.description,
                                onUpdateDescriptionsData: e.updateDescriptions,
                            },
                            null,
                            8,
                            ['description', 'onUpdateDescriptionsData']
                        ),
                    ]),
                    t('div', tt, v(e.errors.description), 1),
                ]),
                t('div', ot, [
                    at,
                    t('div', st, [
                        s(
                            D,
                            {
                                modelValue: e.propertyData.short_description,
                                'onUpdate:modelValue':
                                    o[2] ||
                                    (o[2] = (r) =>
                                        (e.propertyData.short_description = r)),
                                filled: '',
                                outlined: '',
                                placeholder: 'Short Descriptions',
                                type: 'textarea',
                            },
                            null,
                            8,
                            ['modelValue']
                        ),
                    ]),
                    t('div', lt, v(e.errors.short_description), 1),
                ]),
                t(
                    'div',
                    {
                        class: g([
                            'col-12 col-md-6',
                            l.$q.screen.lt.md ? 'pr-0' : 'pr-6',
                        ]),
                    },
                    [
                        rt,
                        s(
                            x,
                            {
                                dense: '',
                                modelValue: e.propertyData.status,
                                'onUpdate:modelValue':
                                    o[3] ||
                                    (o[3] = (r) => (e.propertyData.status = r)),
                                options: e.status,
                                'option-value': 'slug',
                                'option-label': 'label',
                                label: 'Status',
                            },
                            null,
                            8,
                            ['modelValue', 'options']
                        ),
                    ],
                    2
                ),
                t('div', nt, [
                    it,
                    s(
                        x,
                        {
                            dense: '',
                            modelValue: e.propertyData.property_types,
                            'onUpdate:modelValue':
                                o[4] ||
                                (o[4] = (r) =>
                                    (e.propertyData.property_types = r)),
                            options: e.property_types,
                            'option-value': 'id',
                            'option-label': 'label',
                            label: 'Please Select',
                        },
                        null,
                        8,
                        ['modelValue', 'options']
                    ),
                    t('div', dt, v(e.errors.type_id), 1),
                ]),
                t(
                    'div',
                    {
                        class: g([
                            'col-12 col-md-6',
                            l.$q.screen.lt.md ? 'pr-0' : 'pr-6',
                        ]),
                    },
                    [
                        ct,
                        s(
                            x,
                            {
                                dense: '',
                                modelValue: e.propertyData.state,
                                'onUpdate:modelValue':
                                    o[5] ||
                                    (o[5] = (r) => (e.propertyData.state = r)),
                                options: e.state,
                                'option-value': 'id',
                                'option-label': 'label',
                                label: 'Please Select',
                            },
                            null,
                            8,
                            ['modelValue', 'options']
                        ),
                        t('div', pt, v(e.errors.state_id), 1),
                    ],
                    2
                ),
                t('div', ut, [
                    mt,
                    s(
                        D,
                        {
                            dense: '',
                            outlined: '',
                            label: 'Price',
                            modelValue: e.propertyData.price,
                            'onUpdate:modelValue':
                                o[6] ||
                                (o[6] = (r) => (e.propertyData.price = r)),
                            type: 'number',
                        },
                        null,
                        8,
                        ['modelValue']
                    ),
                ]),
                t(
                    'div',
                    {
                        class: g([
                            'col-12 col-md-6',
                            l.$q.screen.lt.md ? 'pr-0' : 'pr-6',
                        ]),
                    },
                    [
                        _t,
                        s(
                            x,
                            {
                                dense: '',
                                modelValue: e.propertyData.listing_type,
                                'onUpdate:modelValue':
                                    o[7] ||
                                    (o[7] = (r) =>
                                        (e.propertyData.listing_type = r)),
                                options: e.listingType,
                                label: 'Please Select',
                                'emit-value': '',
                                'map-options': '',
                            },
                            null,
                            8,
                            ['modelValue', 'options']
                        ),
                    ],
                    2
                ),
                t(
                    'div',
                    {
                        class: g([
                            'col-12 row gap-y-4',
                            e.propertyDetailsToggle ? '' : 'hidden',
                        ]),
                    },
                    [
                        t(
                            'div',
                            {
                                class: g([
                                    'col-12 col-md-6',
                                    l.$q.screen.lt.md ? 'pr-0' : 'pr-6',
                                ]),
                            },
                            [
                                ft,
                                s(
                                    x,
                                    {
                                        dense: '',
                                        modelValue:
                                            e.propertyDetailsData.tenure,
                                        'onUpdate:modelValue':
                                            o[8] ||
                                            (o[8] = (r) =>
                                                (e.propertyDetailsData.tenure =
                                                    r)),
                                        options: e.tenure,
                                        label: 'Please Select',
                                        'emit-value': '',
                                        'map-options': '',
                                    },
                                    null,
                                    8,
                                    ['modelValue', 'options']
                                ),
                            ],
                            2
                        ),
                        t('div', yt, [
                            vt,
                            s(
                                D,
                                {
                                    dense: '',
                                    outlined: '',
                                    label: 'Square Feet',
                                    modelValue:
                                        e.propertyDetailsData.square_feet,
                                    'onUpdate:modelValue':
                                        o[9] ||
                                        (o[9] = (r) =>
                                            (e.propertyDetailsData.square_feet =
                                                r)),
                                    type: 'number',
                                },
                                null,
                                8,
                                ['modelValue']
                            ),
                        ]),
                        t(
                            'div',
                            {
                                class: g([
                                    'col-12 col-md-6',
                                    l.$q.screen.lt.md ? 'pr-0' : 'pr-6',
                                ]),
                            },
                            [
                                ht,
                                s(
                                    x,
                                    {
                                        dense: '',
                                        modelValue:
                                            e.propertyDetailsData.furnishing,
                                        'onUpdate:modelValue':
                                            o[10] ||
                                            (o[10] = (r) =>
                                                (e.propertyDetailsData.furnishing =
                                                    r)),
                                        options: e.furnishing,
                                        label: 'Please Select',
                                        'emit-value': '',
                                        'map-options': '',
                                    },
                                    null,
                                    8,
                                    ['modelValue', 'options']
                                ),
                            ],
                            2
                        ),
                        t(
                            'div',
                            {
                                class: g([
                                    'col-12 col-md-6',
                                    l.$q.screen.lt.md ? 'pr-0' : 'pr-6',
                                ]),
                            },
                            [
                                gt,
                                s(
                                    D,
                                    {
                                        dense: '',
                                        outlined: '',
                                        label: 'Bathroom',
                                        modelValue:
                                            e.propertyDetailsData.bathroom,
                                        'onUpdate:modelValue':
                                            o[11] ||
                                            (o[11] = (r) =>
                                                (e.propertyDetailsData.bathroom =
                                                    r)),
                                        type: 'number',
                                    },
                                    null,
                                    8,
                                    ['modelValue']
                                ),
                            ],
                            2
                        ),
                        t(
                            'div',
                            {
                                class: g([
                                    'col-12 col-md-6',
                                    l.$q.screen.lt.md ? 'pr-0' : 'pr-6',
                                ]),
                            },
                            [
                                Dt,
                                s(
                                    D,
                                    {
                                        dense: '',
                                        outlined: '',
                                        label: 'Bedroom',
                                        modelValue:
                                            e.propertyDetailsData.bedroom,
                                        'onUpdate:modelValue':
                                            o[12] ||
                                            (o[12] = (r) =>
                                                (e.propertyDetailsData.bedroom =
                                                    r)),
                                        type: 'number',
                                    },
                                    null,
                                    8,
                                    ['modelValue']
                                ),
                            ],
                            2
                        ),
                        t('div', bt, [
                            xt,
                            s(
                                D,
                                {
                                    dense: '',
                                    outlined: '',
                                    label: 'Carpark',
                                    modelValue: e.propertyDetailsData.car_park,
                                    'onUpdate:modelValue':
                                        o[13] ||
                                        (o[13] = (r) =>
                                            (e.propertyDetailsData.car_park =
                                                r)),
                                    type: 'number',
                                },
                                null,
                                8,
                                ['modelValue']
                            ),
                        ]),
                    ],
                    2
                ),
                t('div', Vt, [
                    t('div', Ct, [
                        St,
                        e.routeType === 'update'
                            ? (S(),
                              k('div', kt, [
                                  s(c, { property: e.propertyData }, null, 8, [
                                      'property',
                                  ]),
                              ]))
                            : ue('', !0),
                    ]),
                    s(
                        f,
                        {
                            onUpdateFiles: e.updateParentFiles,
                            propertyData: e.propertyData,
                        },
                        null,
                        8,
                        ['onUpdateFiles', 'propertyData']
                    ),
                    t('div', Pt, v(e.errors.module_path), 1),
                ]),
                t('div', Ft, [
                    s(
                        C,
                        {
                            label:
                                e.routeType == 'update' ? 'Update' : 'Submit',
                            class: 'text-white bg-primary update-form__button',
                            onClick: e.submitData,
                        },
                        null,
                        8,
                        ['label', 'onClick']
                    ),
                ]),
            ]),
        ])
    );
}
const eo = $(Le, [['render', wt]]);
export { eo as default };
