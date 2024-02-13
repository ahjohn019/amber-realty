import { B as Q } from './BaseLayout-021c28f9.js';
import { u as L } from './index-fdec53fb.js';
import {
    B as h,
    m as y,
    n as a,
    x as p,
    D as r,
    s as d,
    H as w,
    a5 as x,
    q,
    a6 as D,
    r as u,
    o as C,
    A as n,
    G as g,
    a7 as f,
    F as N,
} from './ckeditor-2db82a36.js';
import { Q as E } from './QBtn-7730d556.js';
import { Q as $ } from './QCardSection-179f6214.js';
import { Q as A } from './QCard-e317547d.js';
import { Q as B } from './QDialog-e6831ada.js';
import { Q as S } from './QChip-5d519ab4.js';
import { Q as b } from './QImg-c1b5f080.js';
import { Q as I } from './QAvatar-131e90e9.js';
import './QToolbar-a9880aec.js';
import './vm-8acb4ab5.js';
import './QMenu-5921cef6.js';
import './use-tick-c308625a.js';
import './QSeparator-1586664c.js';
import './ClosePopup-c862ef9f.js';
import './dayjs.min-66d8ef05.js';
import './use-prevent-scroll-980b8771.js';
const V = { props: ['propertyDetails', 'sliderOptions'] },
    R = { class: 'col-12 row justify-between' },
    T = { key: 0, class: 'col-12' };
function P(o, s, t, e, m, c) {
    const l = y('SplideSlide'),
        i = y('Splide');
    return (
        a(),
        p('div', R, [
            t.propertyDetails.sliders
                ? (a(),
                  p('div', T, [
                      r(
                          i,
                          {
                              options: t.sliderOptions,
                              'aria-label': 'My Favorite Images',
                          },
                          {
                              default: d(() => [
                                  (a(!0),
                                  p(
                                      w,
                                      null,
                                      x(
                                          t.propertyDetails.sliders,
                                          (_, v) => (
                                              a(),
                                              q(
                                                  l,
                                                  { key: v },
                                                  {
                                                      default: d(() => [
                                                          r(
                                                              b,
                                                              {
                                                                  src: _.image
                                                                      .url,
                                                                  class: 'h-full',
                                                                  fit: 'contain',
                                                              },
                                                              null,
                                                              8,
                                                              ['src']
                                                          ),
                                                      ]),
                                                      _: 2,
                                                  },
                                                  1024
                                              )
                                          )
                                      ),
                                      128
                                  )),
                              ]),
                              _: 1,
                          },
                          8,
                          ['options']
                      ),
                  ]))
                : D('', !0),
        ])
    );
}
const O = h(V, [['render', P]]),
    j = {
        components: { SliderComponent: O },
        props: [
            'propertyDetails',
            'propertyRoomDetails',
            'contactNumber',
            'whatsAppEnquiries',
            'sliders',
        ],
        setup() {
            const o = u(!1),
                s = u({}),
                t = 1200,
                e = u('');
            e.value = 'hidden';
            const m = () => {
                    (o.value = !0),
                        setTimeout(() => {
                            c(), (e.value = '');
                        }, t);
                },
                c = () => {
                    s.value = {
                        type: 'loop',
                        perPage: 1,
                        gap: '1rem',
                        height: 0,
                    };
                };
            return (
                C(() => {
                    setTimeout(() => {
                        c(), (e.value = '');
                    }, t);
                }),
                {
                    selectSliderModal: m,
                    sliderListOptions: c,
                    sliderModal: o,
                    sliderOptions: s,
                    sliderButton: e,
                }
            );
        },
    },
    H = { class: 'col-12 row justify-between items-center q-gutter-y-md' },
    F = { class: 'col-12 pl-2 row justify-between items-center q-gutter-y-md' },
    z = { class: 'col col-auto text-4xl break-words' },
    U = { key: 0, class: 'col col-auto text-right' },
    W = { key: 0, class: 'col-12' },
    G = { class: 'text-sm' },
    Y = { class: 'col-12 pl-2' },
    J = {
        class: 'bg-secondary featured-label text-center py-2 px-4 font-bold rounded capitalize w-[100px]',
    },
    K = { class: 'col-12 pl-2' },
    X = { class: 'text-xl font-bold' };
function Z(o, s, t, e, m, c) {
    const l = y('SliderComponent');
    return (
        a(),
        p('div', H, [
            n('div', F, [
                n('div', z, g(t.propertyDetails.name), 1),
                t.sliders > 0
                    ? (a(),
                      p('div', U, [
                          r(
                              E,
                              {
                                  label: 'View More',
                                  icon: 'photo_camera',
                                  color: 'teal',
                                  class: f(e.sliderButton),
                                  onClick:
                                      s[0] ||
                                      (s[0] = (i) => e.selectSliderModal()),
                              },
                              null,
                              8,
                              ['class']
                          ),
                          r(
                              B,
                              {
                                  modelValue: e.sliderModal,
                                  'onUpdate:modelValue':
                                      s[1] ||
                                      (s[1] = (i) => (e.sliderModal = i)),
                              },
                              {
                                  default: d(() => [
                                      r(
                                          A,
                                          {
                                              style: {
                                                  width: '700px',
                                                  'max-width': '100vw',
                                              },
                                          },
                                          {
                                              default: d(() => [
                                                  r($, null, {
                                                      default: d(() => [
                                                          r(
                                                              l,
                                                              {
                                                                  propertyDetails:
                                                                      t.propertyDetails,
                                                                  sliderOptions:
                                                                      e.sliderOptions,
                                                              },
                                                              null,
                                                              8,
                                                              [
                                                                  'propertyDetails',
                                                                  'sliderOptions',
                                                              ]
                                                          ),
                                                      ]),
                                                      _: 1,
                                                  }),
                                              ]),
                                              _: 1,
                                          }
                                      ),
                                  ]),
                                  _: 1,
                              },
                              8,
                              ['modelValue']
                          ),
                      ]))
                    : D('', !0),
            ]),
            t.propertyDetails.details && t.propertyDetails.details_toggle
                ? (a(),
                  p('div', W, [
                      n('div', G, [
                          (a(!0),
                          p(
                              w,
                              null,
                              x(
                                  t.propertyRoomDetails,
                                  (i, _) => (
                                      a(),
                                      q(
                                          S,
                                          {
                                              color: 'teal',
                                              'text-color': 'white',
                                              icon: i.icon,
                                              key: _,
                                          },
                                          {
                                              default: d(() => [
                                                  N(
                                                      g(
                                                          t.propertyDetails
                                                              .details[i.value]
                                                      ) +
                                                          ' ' +
                                                          g(i.name),
                                                      1
                                                  ),
                                              ]),
                                              _: 2,
                                          },
                                          1032,
                                          ['icon']
                                      )
                                  )
                              ),
                              128
                          )),
                      ]),
                  ]))
                : D('', !0),
            n('div', Y, [
                n('div', J, ' For ' + g(t.propertyDetails.listing_type), 1),
            ]),
            n('div', K, [n('span', X, 'MYR ' + g(t.propertyDetails.price), 1)]),
        ])
    );
}
const ee = h(j, [['render', Z]]),
    te = { props: ['propertyDetails'] },
    oe = { class: 'col-12 row q-gutter-y-md justify-between' },
    ne = { class: 'col-12 row q-gutter-y-md' },
    se = n(
        'div',
        { class: 'col-12 text-3xl font-bold border-b border-black pb-4' },
        ' Short Descriptions ',
        -1
    ),
    re = ['innerHTML'];
function ae(o, s, t, e, m, c) {
    return (
        a(),
        p('div', oe, [
            n(
                'div',
                {
                    class: f([
                        'col-12 bg-secondary rounded row q-gutter-y-md',
                        o.$q.screen.lt.md ? 'p-4' : 'p-10',
                    ]),
                },
                [
                    n('div', ne, [
                        se,
                        n(
                            'div',
                            {
                                class: 'col-12 break-words',
                                innerHTML: t.propertyDetails.short_description,
                            },
                            null,
                            8,
                            re
                        ),
                    ]),
                ],
                2
            ),
        ])
    );
}
const le = h(te, [['render', ae]]),
    ie = { props: ['propertyDetails'] },
    ce = n(
        'div',
        { class: 'col-12 text-3xl font-bold border-b pb-4' },
        'Descriptions',
        -1
    ),
    pe = ['innerHTML'];
function de(o, s, t, e, m, c) {
    return (
        a(),
        p(
            'div',
            {
                class: f([
                    'col-12 row q-gutter-y-md rounded-lg prose max-w-none prose-strong:font-black border rounded-lg bg-slate-50',
                    o.$q.screen.lt.md ? 'p-4' : 'p-10',
                ]),
            },
            [
                ce,
                n(
                    'div',
                    {
                        class: 'col-12',
                        innerHTML: t.propertyDetails.description,
                    },
                    null,
                    8,
                    pe
                ),
            ],
            2
        )
    );
}
const me = h(ie, [['render', de]]),
    ue = {
        props: ['propertyDetails'],
        setup() {
            const o = u(!1);
            return {
                openBanner: o,
                toggleBanner: () => {
                    o.value = !0;
                },
            };
        },
    };
function _e(o, s, t, e, m, c) {
    return (
        a(),
        p('div', null, [
            r(
                b,
                {
                    src: t.propertyDetails.banner
                        ? t.propertyDetails.banner.image.url
                        : '/images/Image_not_available.png',
                    class: 'cursor-pointer h-[550px]',
                    fit: o.$q.screen.lt.md ? 'cover' : 'contain',
                    onClick: s[0] || (s[0] = (l) => e.toggleBanner()),
                },
                null,
                8,
                ['src', 'fit']
            ),
            r(
                B,
                {
                    modelValue: e.openBanner,
                    'onUpdate:modelValue':
                        s[1] || (s[1] = (l) => (e.openBanner = l)),
                },
                {
                    default: d(() => [
                        r(
                            A,
                            { style: { width: '700px', 'max-width': '80vw' } },
                            {
                                default: d(() => [
                                    r($, null, {
                                        default: d(() => [
                                            r(
                                                b,
                                                {
                                                    src: t.propertyDetails
                                                        .banner
                                                        ? t.propertyDetails
                                                              .banner.image.url
                                                        : '/images/Image_not_available.png',
                                                    ratio: 16 / 9,
                                                },
                                                null,
                                                8,
                                                ['src']
                                            ),
                                        ]),
                                        _: 1,
                                    }),
                                ]),
                                _: 1,
                            }
                        ),
                    ]),
                    _: 1,
                },
                8,
                ['modelValue']
            ),
        ])
    );
}
const ye = h(ue, [['render', _e]]),
    fe = {
        props: ['whatsAppEnquiries'],
        setup() {
            const o = u([]);
            return (
                (o.value = [
                    { name: 'Agent Ng', contact: '60192137731' },
                    { name: 'Agent Doo', contact: '60123729668' },
                    { name: 'Agent Teng', contact: '60193560561' },
                ]),
                { contactAgent: o }
            );
        },
    },
    ge = n(
        'div',
        { class: 'col-12 text-3xl font-bold border-b-2 pb-4' },
        ' Listing Agent ',
        -1
    ),
    he = n('img', { src: 'https://cdn.quasar.dev/img/avatar.png' }, null, -1),
    ve = { class: 'col-12 pl-2' },
    be = { class: 'col-12' },
    De = ['href'],
    we = n(
        'span',
        { class: 'align-middle ml-1 px-2 text-sm font-bold' },
        'Whatsapp',
        -1
    );
function xe(o, s, t, e, m, c) {
    return (
        a(),
        p(
            'div',
            {
                class: f([
                    'row q-gutter-y-md border rounded-lg bg-slate-50',
                    o.$q.screen.lt.md ? 'p-4' : 'p-10',
                ]),
            },
            [
                ge,
                (a(!0),
                p(
                    w,
                    null,
                    x(
                        e.contactAgent,
                        (l, i) => (
                            a(),
                            p(
                                'div',
                                {
                                    class: 'col-12 row items-center border-b-2 pb-6',
                                    key: i,
                                },
                                [
                                    n(
                                        'div',
                                        {
                                            class: f([
                                                'col',
                                                o.$q.screen.lt.sm
                                                    ? 'col-4'
                                                    : 'col-auto',
                                            ]),
                                        },
                                        [
                                            r(
                                                I,
                                                { size: '75px' },
                                                { default: d(() => [he]), _: 1 }
                                            ),
                                        ],
                                        2
                                    ),
                                    n(
                                        'div',
                                        {
                                            class: f([
                                                'col row pl-4',
                                                o.$q.screen.lt.md
                                                    ? ''
                                                    : 'col-auto',
                                            ]),
                                        },
                                        [
                                            n(
                                                'div',
                                                {
                                                    class: f([
                                                        'col-12 pl-2 font-bold',
                                                        o.$q.screen.lt.md
                                                            ? ''
                                                            : 'text-xl',
                                                    ]),
                                                },
                                                g(l.name),
                                                3
                                            ),
                                            n('div', ve, g(l.contact), 1),
                                            n('div', be, [
                                                r(
                                                    S,
                                                    {
                                                        color: 'teal',
                                                        'text-color': 'white',
                                                    },
                                                    {
                                                        default: d(() => [
                                                            n(
                                                                'a',
                                                                {
                                                                    href:
                                                                        'https://wa.me/' +
                                                                        l.contact +
                                                                        '?text=' +
                                                                        encodeURIComponent(
                                                                            t.whatsAppEnquiries
                                                                        ),
                                                                    target: '_blank',
                                                                },
                                                                [
                                                                    r(b, {
                                                                        src: '/images/amber_whatsapp.png',
                                                                        alt: '',
                                                                        width: '20px',
                                                                    }),
                                                                    we,
                                                                ],
                                                                8,
                                                                De
                                                            ),
                                                        ]),
                                                        _: 2,
                                                    },
                                                    1024
                                                ),
                                            ]),
                                        ],
                                        2
                                    ),
                                ]
                            )
                        )
                    ),
                    128
                )),
            ],
            2
        )
    );
}
const qe = h(fe, [['render', xe]]),
    Ce = {
        components: {
            BaseLayout: Q,
            InfoComponent: ee,
            ShortDescriptionsComponent: le,
            DescriptionsComponent: me,
            BannerComponent: ye,
            ListingAgentComponent: qe,
        },
        setup() {
            const o = L(),
                s = u({}),
                t = u(0),
                e = u([]),
                m = u([]),
                c = u([]),
                l = u(''),
                i = async () => {
                    var v;
                    const _ = await o.fetchPropertyDetails();
                    return (
                        (s.value = _),
                        (t.value =
                            ((v = _.sliders) == null ? void 0 : v.length) || 0),
                        (l.value =
                            'I am interested in ' +
                            s.value.name +
                            ' priced at RM' +
                            s.value.price +
                            '. Can you provide more details?'),
                        _
                    );
                };
            return (
                (e.value = [
                    { name: 'Agent Ng', contact: '60192137731' },
                    { name: 'Agent Doo', contact: '60123729668' },
                    { name: 'Agent Teng', contact: '60193560561' },
                ]),
                (m.value = [
                    { name: 'Beds', icon: 'bed', value: 'bedroom' },
                    { name: 'Bath', icon: 'bathtub', value: 'bathroom' },
                    {
                        name: 'Car Park',
                        icon: 'directions_car',
                        value: 'car_park',
                    },
                    { name: 'sqft', icon: 'square_foot', value: 'square_feet' },
                    { name: '', icon: 'apartment', value: 'tenure' },
                ]),
                (c.value = [
                    {
                        name: 'Tenure',
                        label: '',
                        front_label: '',
                        value: 'tenure',
                    },
                    {
                        name: 'Price',
                        label: '',
                        front_label: 'RM',
                        value: 'price',
                    },
                ]),
                C(() => {
                    i();
                }),
                {
                    propertyDetails: s,
                    fetchPropertyDetails: i,
                    contactNumber: e,
                    propertyRoomDetails: m,
                    propertyDetailsSection: c,
                    whatsAppEnquiries: l,
                    sliderImageNumber: t,
                }
            );
        },
    },
    $e = {
        class: 'col-12 row justify-between gap-6',
        'data-aos': 'fade-right',
    },
    Ae = { class: 'col-12 row' };
function Be(o, s, t, e, m, c) {
    const l = y('BannerComponent'),
        i = y('InfoComponent'),
        _ = y('ShortDescriptionsComponent'),
        v = y('DescriptionsComponent'),
        k = y('ListingAgentComponent'),
        M = y('BaseLayout');
    return (
        a(),
        q(M, null, {
            content: d(() => [
                r(
                    l,
                    {
                        propertyDetails: e.propertyDetails,
                        style: { 'margin-top': '5.5rem' },
                    },
                    null,
                    8,
                    ['propertyDetails']
                ),
                n(
                    'div',
                    {
                        class: f([
                            'container mx-auto row',
                            o.$q.screen.lt.md ? 'w-full p-4' : 'w-3/4',
                        ]),
                    },
                    [
                        n('div', $e, [
                            n('div', Ae, [
                                r(
                                    i,
                                    {
                                        propertyDetails: e.propertyDetails,
                                        propertyRoomDetails:
                                            e.propertyRoomDetails,
                                        contactNumber: e.contactNumber,
                                        whatsAppEnquiries: e.whatsAppEnquiries,
                                        sliders: e.sliderImageNumber,
                                    },
                                    null,
                                    8,
                                    [
                                        'propertyDetails',
                                        'propertyRoomDetails',
                                        'contactNumber',
                                        'whatsAppEnquiries',
                                        'sliders',
                                    ]
                                ),
                            ]),
                            r(
                                _,
                                { propertyDetails: e.propertyDetails },
                                null,
                                8,
                                ['propertyDetails']
                            ),
                            r(
                                v,
                                { propertyDetails: e.propertyDetails },
                                null,
                                8,
                                ['propertyDetails']
                            ),
                            r(
                                k,
                                { whatsAppEnquiries: e.whatsAppEnquiries },
                                null,
                                8,
                                ['whatsAppEnquiries']
                            ),
                        ]),
                    ],
                    2
                ),
            ]),
            _: 1,
        })
    );
}
const We = h(Ce, [['render', Be]]);
export { We as default };
