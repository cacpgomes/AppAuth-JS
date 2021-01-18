"use strict";
/*
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRequest = exports.GRANT_TYPE_CLIENT_CREDENTIALS = exports.GRANT_TYPE_REFRESH_TOKEN = exports.GRANT_TYPE_AUTHORIZATION_CODE = void 0;
exports.GRANT_TYPE_AUTHORIZATION_CODE = 'authorization_code';
exports.GRANT_TYPE_REFRESH_TOKEN = 'refresh_token';
exports.GRANT_TYPE_CLIENT_CREDENTIALS = 'client_credentials';
/**
 * Represents an Access Token request.
 * For more information look at:
 * https://tools.ietf.org/html/rfc6749#section-4.1.3
 */
var TokenRequest = /** @class */ (function () {
    function TokenRequest(request) {
        this.clientId = request.client_id;
        this.clientSecret = request.client_secret;
        this.redirectUri = request.redirect_uri;
        this.grantType = request.grant_type;
        this.code = request.code;
        this.refreshToken = request.refresh_token;
        this.extras = request.extras;
        this.scope = request.scope;
    }
    /**
     * Serializes a TokenRequest to a JavaScript object.
     */
    TokenRequest.prototype.toJson = function () {
        return {
            grant_type: this.grantType,
            code: this.code,
            refresh_token: this.refreshToken,
            redirect_uri: this.redirectUri,
            client_id: this.clientId,
            client_secret: this.clientSecret,
            extras: this.extras,
            scope: this.scope
        };
    };
    TokenRequest.prototype.toStringMap = function () {
        var map = {
            grant_type: this.grantType,
            client_id: this.clientId,
        };
        if (this.redirectUri) {
            map['redirect_uri'] = this.redirectUri;
        }
        if (this.code) {
            map['code'] = this.code;
        }
        if (this.refreshToken) {
            map['refresh_token'] = this.refreshToken;
        }
        if (this.clientSecret) {
            map['client_secret'] = this.clientSecret;
        }
        if (this.scope) {
            map['scope'] = this.scope;
        }
        // copy over extras
        if (this.extras) {
            for (var extra in this.extras) {
                if (this.extras.hasOwnProperty(extra) && !map.hasOwnProperty(extra)) {
                    // check before inserting to requestMap
                    map[extra] = this.extras[extra];
                }
            }
        }
        return map;
    };
    return TokenRequest;
}());
exports.TokenRequest = TokenRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5fcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90b2tlbl9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7O0dBWUc7OztBQUlVLFFBQUEsNkJBQTZCLEdBQUcsb0JBQW9CLENBQUM7QUFDckQsUUFBQSx3QkFBd0IsR0FBRyxlQUFlLENBQUM7QUFDM0MsUUFBQSw2QkFBNkIsR0FBRyxvQkFBb0IsQ0FBQztBQWdCbEU7Ozs7R0FJRztBQUNIO0lBVUUsc0JBQVksT0FBeUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCw2QkFBTSxHQUFOO1FBQ0UsT0FBTztZQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUztZQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDaEMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzlCLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN4QixhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDaEMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDO0lBQ0osQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxJQUFJLEdBQUcsR0FBYztZQUNuQixVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDMUIsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3pCLENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDeEM7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN6QjtRQUVELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQztRQUVELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQztRQUVELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzNCO1FBRUQsbUJBQW1CO1FBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ25FLHVDQUF1QztvQkFDdkMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pDO2FBQ0Y7U0FDRjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQTFFRCxJQTBFQztBQTFFWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4gKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlXG4gKiBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1N0cmluZ01hcH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBHUkFOVF9UWVBFX0FVVEhPUklaQVRJT05fQ09ERSA9ICdhdXRob3JpemF0aW9uX2NvZGUnO1xuZXhwb3J0IGNvbnN0IEdSQU5UX1RZUEVfUkVGUkVTSF9UT0tFTiA9ICdyZWZyZXNoX3Rva2VuJztcbmV4cG9ydCBjb25zdCBHUkFOVF9UWVBFX0NMSUVOVF9DUkVERU5USUFMUyA9ICdjbGllbnRfY3JlZGVudGlhbHMnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIFRva2VuIFJlcXVlc3QgYXMgSlNPTi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUb2tlblJlcXVlc3RKc29uIHtcbiAgZ3JhbnRfdHlwZTogc3RyaW5nO1xuICBjb2RlPzogc3RyaW5nO1xuICByZWZyZXNoX3Rva2VuPzogc3RyaW5nO1xuICByZWRpcmVjdF91cmk/OiBzdHJpbmc7XG4gIGNsaWVudF9pZDogc3RyaW5nLCBjbGllbnRfc2VjcmV0Pzogc3RyaW5nO1xuICBleHRyYXM/OiBTdHJpbmdNYXA7XG4gIHNjb3BlPzogc3RyaW5nO1xufVxuXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBBY2Nlc3MgVG9rZW4gcmVxdWVzdC5cbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIGxvb2sgYXQ6XG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjc0OSNzZWN0aW9uLTQuMS4zXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2tlblJlcXVlc3Qge1xuICBjbGllbnRJZDogc3RyaW5nO1xuICBjbGllbnRTZWNyZXQ6IHN0cmluZ3x1bmRlZmluZWQ7XG4gIHJlZGlyZWN0VXJpOiBzdHJpbmd8dW5kZWZpbmVkO1xuICBncmFudFR5cGU6IHN0cmluZztcbiAgY29kZTogc3RyaW5nfHVuZGVmaW5lZDtcbiAgcmVmcmVzaFRva2VuOiBzdHJpbmd8dW5kZWZpbmVkO1xuICBleHRyYXM6IFN0cmluZ01hcHx1bmRlZmluZWQ7XG4gIHNjb3BlOiBzdHJpbmd8dW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHJlcXVlc3Q6IFRva2VuUmVxdWVzdEpzb24pIHtcbiAgICB0aGlzLmNsaWVudElkID0gcmVxdWVzdC5jbGllbnRfaWQ7XG4gICAgdGhpcy5jbGllbnRTZWNyZXQgPSByZXF1ZXN0LmNsaWVudF9zZWNyZXQ7XG4gICAgdGhpcy5yZWRpcmVjdFVyaSA9IHJlcXVlc3QucmVkaXJlY3RfdXJpO1xuICAgIHRoaXMuZ3JhbnRUeXBlID0gcmVxdWVzdC5ncmFudF90eXBlO1xuICAgIHRoaXMuY29kZSA9IHJlcXVlc3QuY29kZTtcbiAgICB0aGlzLnJlZnJlc2hUb2tlbiA9IHJlcXVlc3QucmVmcmVzaF90b2tlbjtcbiAgICB0aGlzLmV4dHJhcyA9IHJlcXVlc3QuZXh0cmFzO1xuICAgIHRoaXMuc2NvcGUgPSByZXF1ZXN0LnNjb3BlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYSBUb2tlblJlcXVlc3QgdG8gYSBKYXZhU2NyaXB0IG9iamVjdC5cbiAgICovXG4gIHRvSnNvbigpOiBUb2tlblJlcXVlc3RKc29uIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ3JhbnRfdHlwZTogdGhpcy5ncmFudFR5cGUsXG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICByZWZyZXNoX3Rva2VuOiB0aGlzLnJlZnJlc2hUb2tlbixcbiAgICAgIHJlZGlyZWN0X3VyaTogdGhpcy5yZWRpcmVjdFVyaSxcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRJZCxcbiAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuY2xpZW50U2VjcmV0LFxuICAgICAgZXh0cmFzOiB0aGlzLmV4dHJhcyxcbiAgICAgIHNjb3BlOiB0aGlzLnNjb3BlXG4gICAgfTtcbiAgfVxuXG4gIHRvU3RyaW5nTWFwKCk6IFN0cmluZ01hcCB7XG4gICAgbGV0IG1hcDogU3RyaW5nTWFwID0ge1xuICAgICAgZ3JhbnRfdHlwZTogdGhpcy5ncmFudFR5cGUsXG4gICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50SWQsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnJlZGlyZWN0VXJpKSB7XG4gICAgICBtYXBbJ3JlZGlyZWN0X3VyaSddID0gdGhpcy5yZWRpcmVjdFVyaTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb2RlKSB7XG4gICAgICBtYXBbJ2NvZGUnXSA9IHRoaXMuY29kZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZWZyZXNoVG9rZW4pIHtcbiAgICAgIG1hcFsncmVmcmVzaF90b2tlbiddID0gdGhpcy5yZWZyZXNoVG9rZW47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2xpZW50U2VjcmV0KSB7XG4gICAgICBtYXBbJ2NsaWVudF9zZWNyZXQnXSA9IHRoaXMuY2xpZW50U2VjcmV0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjb3BlKSB7XG4gICAgICBtYXBbJ3Njb3BlJ10gPSB0aGlzLnNjb3BlO1xuICAgIH1cblxuICAgIC8vIGNvcHkgb3ZlciBleHRyYXNcbiAgICBpZiAodGhpcy5leHRyYXMpIHtcbiAgICAgIGZvciAobGV0IGV4dHJhIGluIHRoaXMuZXh0cmFzKSB7XG4gICAgICAgIGlmICh0aGlzLmV4dHJhcy5oYXNPd25Qcm9wZXJ0eShleHRyYSkgJiYgIW1hcC5oYXNPd25Qcm9wZXJ0eShleHRyYSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBiZWZvcmUgaW5zZXJ0aW5nIHRvIHJlcXVlc3RNYXBcbiAgICAgICAgICBtYXBbZXh0cmFdID0gdGhpcy5leHRyYXNbZXh0cmFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG4gIH1cbn1cbiJdfQ==