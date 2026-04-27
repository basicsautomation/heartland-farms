var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _client, _currentResult, _currentMutation, _mutateOptions, _MutationObserver_instances, updateResult_fn, notify_fn, _a;
import { f as Subscribable, s as shallowEqualObjects, h as hashKey, g as getDefaultState, n as notifyManager, i as useQueryClient, r as reactExports, k as noop, l as shouldThrowError, c as createLucideIcon, j as jsxRuntimeExports, d as cn, P as Primitive, R as React, B as Button, M as MapPin, m as Phone, o as Mail, Y as Youtube, p as ue } from "./index-B_yqDsmv.js";
import { a as useActor, c as createActor } from "./backend-CN5Y_TMj.js";
import { C as Card } from "./card-Cw9yFsU6.js";
import { m as motion } from "./proxy-BwF7As6b.js";
var MutationObserver = (_a = class extends Subscribable {
  constructor(client, options) {
    super();
    __privateAdd(this, _MutationObserver_instances);
    __privateAdd(this, _client);
    __privateAdd(this, _currentResult);
    __privateAdd(this, _currentMutation);
    __privateAdd(this, _mutateOptions);
    __privateSet(this, _client, client);
    this.setOptions(options);
    this.bindMethods();
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    var _a2;
    const prevOptions = this.options;
    this.options = __privateGet(this, _client).defaultMutationOptions(options);
    if (!shallowEqualObjects(this.options, prevOptions)) {
      __privateGet(this, _client).getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: __privateGet(this, _currentMutation),
        observer: this
      });
    }
    if ((prevOptions == null ? void 0 : prevOptions.mutationKey) && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
      this.reset();
    } else if (((_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.state.status) === "pending") {
      __privateGet(this, _currentMutation).setOptions(this.options);
    }
  }
  onUnsubscribe() {
    var _a2;
    if (!this.hasListeners()) {
      (_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
    __privateMethod(this, _MutationObserver_instances, notify_fn).call(this, action);
  }
  getCurrentResult() {
    return __privateGet(this, _currentResult);
  }
  reset() {
    var _a2;
    (_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.removeObserver(this);
    __privateSet(this, _currentMutation, void 0);
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
    __privateMethod(this, _MutationObserver_instances, notify_fn).call(this);
  }
  mutate(variables, options) {
    var _a2;
    __privateSet(this, _mutateOptions, options);
    (_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.removeObserver(this);
    __privateSet(this, _currentMutation, __privateGet(this, _client).getMutationCache().build(__privateGet(this, _client), this.options));
    __privateGet(this, _currentMutation).addObserver(this);
    return __privateGet(this, _currentMutation).execute(variables);
  }
}, _client = new WeakMap(), _currentResult = new WeakMap(), _currentMutation = new WeakMap(), _mutateOptions = new WeakMap(), _MutationObserver_instances = new WeakSet(), updateResult_fn = function() {
  var _a2;
  const state = ((_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.state) ?? getDefaultState();
  __privateSet(this, _currentResult, {
    ...state,
    isPending: state.status === "pending",
    isSuccess: state.status === "success",
    isError: state.status === "error",
    isIdle: state.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, notify_fn = function(action) {
  notifyManager.batch(() => {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    if (__privateGet(this, _mutateOptions) && this.hasListeners()) {
      const variables = __privateGet(this, _currentResult).variables;
      const onMutateResult = __privateGet(this, _currentResult).context;
      const context = {
        client: __privateGet(this, _client),
        meta: this.options.meta,
        mutationKey: this.options.mutationKey
      };
      if ((action == null ? void 0 : action.type) === "success") {
        try {
          (_b = (_a2 = __privateGet(this, _mutateOptions)).onSuccess) == null ? void 0 : _b.call(
            _a2,
            action.data,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
        try {
          (_d = (_c = __privateGet(this, _mutateOptions)).onSettled) == null ? void 0 : _d.call(
            _c,
            action.data,
            null,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
      } else if ((action == null ? void 0 : action.type) === "error") {
        try {
          (_f = (_e = __privateGet(this, _mutateOptions)).onError) == null ? void 0 : _f.call(
            _e,
            action.error,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
        try {
          (_h = (_g = __privateGet(this, _mutateOptions)).onSettled) == null ? void 0 : _h.call(
            _g,
            void 0,
            action.error,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
      }
    }
    this.listeners.forEach((listener) => {
      listener(__privateGet(this, _currentResult));
    });
  });
}, _a);
function useMutation(options, queryClient) {
  const client = useQueryClient();
  const [observer] = reactExports.useState(
    () => new MutationObserver(
      client,
      options
    )
  );
  reactExports.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = reactExports.useSyncExternalStore(
    reactExports.useCallback(
      (onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = reactExports.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop);
    },
    [observer]
  );
  if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a2;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a2 = props.onMouseDown) == null ? void 0 : _a2.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React.createContext && /* @__PURE__ */ React.createContext(DefaultContext);
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ React.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ React.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
function SiWhatsapp(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" }, "child": [] }] })(props);
}
const WHATSAPP_LINK = "https://wa.me/919980055940";
const YOUTUBE_LINK = "https://www.youtube.com/@heartlandfarms";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122041.19!2d75.72!3d16.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5d1d28e7d9e03%3A0x13aa6e0c11ee8a1!2sVijayapura%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000";
const INITIAL_FORM = { name: "", email: "", phone: "", message: "" };
const contactInfoItems = [
  {
    icon: MapPin,
    label: "Our Farm",
    value: "Vijayapura, North Karnataka, India"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99800 55940",
    href: "tel:+919980055940"
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@heartlandfarms.in",
    href: "mailto:info@heartlandfarms.in"
  }
];
function ContactPage() {
  const { actor } = useActor(createActor);
  const [form, setForm] = reactExports.useState(INITIAL_FORM);
  const [errors, setErrors] = reactExports.useState({});
  const mutation = useMutation({
    mutationFn: async (data) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContact(
        data.name,
        data.email,
        data.message,
        data.phone || null
      );
    },
    onSuccess: () => {
      ue.success("Message sent! We'll get back to you soon.", {
        description: "Gurupad and the Heartland Farms team will be in touch.",
        duration: 5e3
      });
      setForm(INITIAL_FORM);
      setErrors({});
    },
    onError: () => {
      ue.error(
        "Something went wrong. Please try WhatsApp or email directly."
      );
    }
  });
  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address";
    if (!form.message.trim()) newErrors.message = "Please share your message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  function handleChange(field) {
    return (e) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: void 0 }));
    };
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) mutation.mutate(form);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-primary py-24 px-4 text-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_oklch(0.65_0.12_33)_0%,_transparent_60%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7 },
          className: "relative z-10 max-w-2xl mx-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-premium-subtitle text-primary-foreground/80 mb-2", children: "Heartland Farms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-4", children: "Get in Touch" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/75 text-lg max-w-lg mx-auto font-body", children: "Whether you have a question about our produce, want to visit the farm, or simply want to say hello — we'd love to hear from you." })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-6 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center sm:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground font-display text-lg font-semibold", children: "Prefer to chat directly?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-sm font-body", children: "Reach Gurupad instantly on WhatsApp — fastest way to connect." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: WHATSAPP_LINK,
          target: "_blank",
          rel: "noopener noreferrer",
          "data-ocid": "contact.whatsapp_button",
          className: "flex items-center gap-3 bg-[--color-whatsapp] hover:bg-[--color-whatsapp-hover] text-white font-body font-semibold text-base px-8 py-4 rounded-2xl shadow-lg transition-smooth whitespace-nowrap",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SiWhatsapp, { size: 24 }),
            "Chat on WhatsApp"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-bold text-foreground mb-2", children: "Send Us a Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body mb-8", children: "Fill out the form below and we'll respond within 24 hours." }),
            mutation.isSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "contact.success_state",
                className: "flex flex-col items-center text-center py-16 gap-4 bg-muted/40 rounded-2xl border border-border",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "text-primary", size: 48 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-semibold text-foreground", children: "Message Received!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body max-w-xs", children: "Thank you for reaching out. Gurupad will get back to you shortly." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      onClick: () => mutation.reset(),
                      className: "mt-2",
                      children: "Send Another Message"
                    }
                  )
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                onSubmit: handleSubmit,
                className: "flex flex-col gap-5",
                noValidate: true,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Label,
                        {
                          htmlFor: "contact-name",
                          className: "font-body text-sm font-medium",
                          children: [
                            "Full Name ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "contact-name",
                          "data-ocid": "contact.name_input",
                          placeholder: "Your name",
                          value: form.name,
                          onChange: handleChange("name"),
                          onBlur: () => !form.name.trim() && setErrors((p) => ({ ...p, name: "Name is required" })),
                          "aria-invalid": !!errors.name,
                          className: errors.name ? "border-destructive" : ""
                        }
                      ),
                      errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          "data-ocid": "contact.name_field_error",
                          className: "text-destructive text-xs font-body",
                          children: errors.name
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Label,
                        {
                          htmlFor: "contact-email",
                          className: "font-body text-sm font-medium",
                          children: [
                            "Email Address ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "contact-email",
                          "data-ocid": "contact.email_input",
                          type: "email",
                          placeholder: "you@example.com",
                          value: form.email,
                          onChange: handleChange("email"),
                          onBlur: () => {
                            if (!form.email.trim())
                              setErrors((p) => ({
                                ...p,
                                email: "Email is required"
                              }));
                            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              setErrors((p) => ({
                                ...p,
                                email: "Enter a valid email address"
                              }));
                          },
                          "aria-invalid": !!errors.email,
                          className: errors.email ? "border-destructive" : ""
                        }
                      ),
                      errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          "data-ocid": "contact.email_field_error",
                          className: "text-destructive text-xs font-body",
                          children: errors.email
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Label,
                      {
                        htmlFor: "contact-phone",
                        className: "font-body text-sm font-medium",
                        children: [
                          "Phone Number",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "(optional)" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "contact-phone",
                        "data-ocid": "contact.phone_input",
                        type: "tel",
                        placeholder: "+91 XXXXX XXXXX",
                        value: form.phone,
                        onChange: handleChange("phone")
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Label,
                      {
                        htmlFor: "contact-message",
                        className: "font-body text-sm font-medium",
                        children: [
                          "Message ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        id: "contact-message",
                        "data-ocid": "contact.message_textarea",
                        placeholder: "Tell us what's on your mind — farm visits, produce enquiries, partnerships, or just a hello!",
                        value: form.message,
                        onChange: handleChange("message"),
                        onBlur: () => !form.message.trim() && setErrors((p) => ({
                          ...p,
                          message: "Please share your message"
                        })),
                        rows: 5,
                        "aria-invalid": !!errors.message,
                        className: errors.message ? "border-destructive" : ""
                      }
                    ),
                    errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        "data-ocid": "contact.message_field_error",
                        className: "text-destructive text-xs font-body",
                        children: errors.message
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "submit",
                      "data-ocid": "contact.submit_button",
                      disabled: mutation.isPending,
                      className: "w-full sm:w-auto self-start gap-2 px-8 py-3 text-base font-body",
                      children: mutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Sending…" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 }),
                        "Send Message"
                      ] })
                    }
                  ),
                  mutation.isPending && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      "data-ocid": "contact.loading_state",
                      className: "text-muted-foreground text-sm font-body animate-pulse",
                      children: "Sending your message…"
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.1 },
          className: "flex flex-col gap-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-muted/40 border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-primary text-lg", children: "G" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-base", children: "Gurupad MS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm", children: "Founder, Heartland Farms" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/75 font-body text-sm mt-2 leading-relaxed", children: `"From corporate boardrooms to fertile fields — I built Heartland Farms to prove that farming is India's most fulfilling future. Let's connect."` })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: contactInfoItems.map(({ icon: Icon, label, value, href }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Card,
              {
                className: "p-4 flex items-center gap-4 border-border hover:shadow-md transition-smooth",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, className: "text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-xs uppercase tracking-wider mb-0.5", children: label }),
                    href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href,
                        className: "text-foreground font-body font-medium text-sm hover:text-primary transition-colors truncate block",
                        children: value
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-body font-medium text-sm break-words", children: value })
                  ] })
                ]
              },
              label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: WHATSAPP_LINK,
                target: "_blank",
                rel: "noopener noreferrer",
                "data-ocid": "contact.whatsapp_card",
                className: "flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/40 rounded-2xl p-5 hover:bg-[#25D366]/20 transition-smooth group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiWhatsapp, { size: 24, className: "text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-base", children: "WhatsApp Chat" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm", children: "+91 99800 55940 — fastest reply" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-body text-sm", children: "Follow our journey:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: YOUTUBE_LINK,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-ocid": "contact.youtube_link",
                  "aria-label": "Heartland Farms YouTube Channel",
                  className: "w-9 h-9 bg-muted rounded-full flex items-center justify-center hover:bg-red-500/10 hover:text-red-500 transition-smooth",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { size: 18 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: WHATSAPP_LINK,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-ocid": "contact.whatsapp_social_link",
                  "aria-label": "Heartland Farms WhatsApp",
                  className: "w-9 h-9 bg-muted rounded-full flex items-center justify-center hover:bg-[#25D366]/20 hover:text-[#25D366] transition-smooth",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiWhatsapp, { size: 18 })
                }
              )
            ] })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "text-center mb-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-bold text-foreground mb-2", children: "Find Us in Vijayapura" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body", children: "Located in the heart of North Karnataka's agricultural belt — known for its legendary Vijayapura grapes." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border border-border shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          "data-ocid": "contact.map_embed",
          src: MAPS_EMBED,
          width: "100%",
          height: "420",
          style: { border: 0 },
          allowFullScreen: true,
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade",
          title: "Heartland Farms location — Vijayapura, Karnataka"
        }
      ) })
    ] }) })
  ] });
}
export {
  ContactPage as default
};
