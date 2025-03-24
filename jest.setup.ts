// <reference types="@testing-library/jest-dom" />
import "@testing-library/jest-dom";
import "fast-text-encoding";
import { TextEncoder, TextDecoder } from "util";
import IntlPolyfill from "intl";

global.TextEncoder = global.TextEncoder || TextEncoder;
global.TextDecoder = global.TextDecoder || TextDecoder;

global.Intl = global.Intl || IntlPolyfill;
