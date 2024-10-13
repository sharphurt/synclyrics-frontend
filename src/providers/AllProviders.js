import {AuthorizationProvider} from "./AuthorizationProvider";
import {PlaybackProvider} from "./PlaybackProvider";

const combineProviders = (providers) => {
    return providers.reduce(
        (AccumulatedProviders, [Provider, props = {}]) => ({children}) => (
            <AccumulatedProviders>
                <Provider {...props}>
                    <>{children}</>
                </Provider>
            </AccumulatedProviders>
        ),
        ({children}) => <>{children}</>
    );
}

export const AllProviders = combineProviders([
    [AuthorizationProvider],
    [PlaybackProvider]
]);