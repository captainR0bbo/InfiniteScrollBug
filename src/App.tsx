import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonAvatar,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRouterOutlet,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useEffect, useState } from "react";

const userData = [
  { name: "Jon", created: "test" },
  { name: "Joan", created: "test" },
  { name: "Tom", created: "test" },
  { name: "Tim", created: "test" },
  { name: "Tom", created: "test" },
  { name: "Ken", created: "test" },
  { name: "Cheryl", created: "test" },
  { name: "David", created: "test" },
  { name: "Susan", created: "test" },
  { name: "Lindsay", created: "test" },
  { name: "Jack", created: "test" },
  { name: "Ben", created: "test" },
  { name: "Bill", created: "test" },
  { name: "Rosi", created: "test" },
  { name: "Thomas", created: "test" },
  { name: "Vince", created: "test" },
  { name: "Zac", created: "test" },
  { name: "Matt", created: "test" },
  { name: "Tucker", created: "test" },
  { name: "Judy", created: "test" },
  { name: "Jon1", created: "test" },
  { name: "Joan1", created: "test" },
  { name: "Tom1", created: "test" },
  { name: "Tim1", created: "test" },
  { name: "Tom1", created: "test" },
  { name: "Ken1", created: "test" },
  { name: "Cheryl1", created: "test" },
  { name: "David1", created: "test" },
  { name: "Susan1", created: "test" },
  { name: "Lindsay1", created: "test" },
  { name: "Jack1", created: "test" },
  { name: "Ben1", created: "test" },
  { name: "Bill1", created: "test" },
  { name: "Rosi1", created: "test" },
  { name: "Thomas1", created: "test" },
  { name: "Vince1", created: "test" },
  { name: "Zac1", created: "test" },
  { name: "Matt1", created: "test" },
  { name: "Tucker1", created: "test" },
  { name: "Judy1", created: "test" },
  { name: "Jon2", created: "test" },
  { name: "Joan2", created: "test" },
  { name: "Tom2", created: "test" },
  { name: "Tim2", created: "test" },
  { name: "Tom2", created: "test" },
  { name: "Ken2", created: "test" },
  { name: "Cheryl2", created: "test" },
  { name: "David2", created: "test" },
  { name: "Susan2", created: "test" },
  { name: "Lindsay2", created: "test" },
  { name: "Jack2", created: "test" },
  { name: "Ben2", created: "test" },
  { name: "Bill2", created: "test" },
  { name: "Rosi2", created: "test" },
  { name: "Thomas2", created: "test" },
  { name: "Vince2", created: "test" },
  { name: "Zac2", created: "test" },
  { name: "Matt2", created: "test" },
  { name: "Tucker2", created: "test" },
  { name: "Judy2", created: "test" },
];

function wait(time: number) {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

const App: React.FC = () => {
  const pageSize = 20;
  const [users, setUsers] = useState<
    {
      name: string;
      created: string;
    }[]
  >([]);
  const [disableInfiniteScroll, setDisableInfiniteScroll] =
    useState<boolean>(false);

  async function searchNext($event: CustomEvent<void>) {
    let newUsers = userData.slice(0, users.length + pageSize);
    await wait(500); // show loading
    setUsers(newUsers);
    ($event.target as HTMLIonInfiniteScrollElement).complete();
  }

  useEffect(() => {
    let newUsers = userData.slice(0, pageSize);
    setUsers(newUsers);
  }, []);
  return (
    <IonApp>
      <IonPage>
        <IonContent>
          <IonList id="list">
            {users.map((u, i) => {
              let url =
                "https://www.gravatar.com/avatar/" +
                i +
                pageSize +
                "?d=monsterid&f=y";
              return (
                <IonItem key={i}>
                  <IonAvatar slot="start">
                    <img src={url} />
                  </IonAvatar>
                  <IonLabel>
                    <h2>{u.name}</h2>
                    <p>{u.created}</p>
                  </IonLabel>
                </IonItem>
              );
            })}
          </IonList>

          <IonInfiniteScroll
            threshold="100px"
            disabled={disableInfiniteScroll}
            onIonInfinite={(e: CustomEvent<void>) => searchNext(e)}
          >
            <IonInfiniteScrollContent loadingText="Loading more..."></IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;
