import {readingBeginning, setup as setupJmdict} from 'jmdict-simplified-node';

if (module === require.main) {
  (async function main() {
    const jmdictPromise =
        setupJmdict('my-jmdict-simplified-db', 'jmdict-eng-3.1.0.json');
    const {db} = await jmdictPromise;
    // This `db` is used by all functions in this API, so hang on to it.
    // You only need to run `setup`/`setupJmdict` ONCE in your app, to get this `db`.
    const results = await readingBeginning(db, 'にほん');
    console.dir(results, {depth: null});
  })();
}