import React from "react";
import "../components/Conversation.css";
import bg from "../components/images/profil.png";

const Conversation = () => {
  return (
    <div className="bloc-chat">
      <div className="chat-part1">
        <div className="haut-text">
          <div className="userimg">
            <img src={bg} alt="background" className="cover" />
          </div>
          <h1> Message</h1>
        </div>
        <div className="search-chat">
          <div>
            <input type="text" placeholder="recherche chat" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="chat-list">
          <div className="block  active">
            <div className="imgbx">
              <img src={bg} alt="background" className="cover" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4> Michel Inapogui</h4>
                <p className="time">10:20</p>
              </div>
              <div className="message_p">
                <p>salut! moi c'est inapogui</p>
              </div>
            </div>
          </div>

          <div className="block unread">
            <div className="imgbx">
              <img src={bg} alt="background" className="cover" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4> Christ Mbuli</h4>
                <p className="time">05:20</p>
              </div>
              <div className="message_p">
                <p>
                  je passe te voir après et surtout n'oublie pas pour la reunion
                  de demain
                </p>
                <b>2</b>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img src={bg} alt="background" className="cover" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4> Ruth Soumaoro</h4>
                <p className="time">22:20</p>
              </div>
              <div className="message_p">
                <p>tu me manques</p>
                <b>2</b>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img src={bg} alt="background" className="cover" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4> Michel Inapogui</h4>
                <p className="time">10:20</p>
              </div>
              <div className="message_p">
                <p>salut! moi c'est inapogui</p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img src={bg} alt="background" className="cover" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4> Aschraf</h4>
                <p className="time">22:20</p>
              </div>
              <div className="message_p">
                <p>Vous avez un contrôle demain</p>
                <b>1</b>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img src={bg} alt="background" className="cover" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4> Ruth Soumaoro</h4>
                <p className="time">22:20</p>
              </div>
              <div className="message_p">
                <p>tu me manques</p>
                <b>2</b>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img src={bg} alt="background" className="cover" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4> Michel Inapogui</h4>
                <p className="time">10:20</p>
              </div>
              <div className="message_p">
                <p>salut! moi c'est inapogui</p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img src={bg} alt="background" className="cover" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4> Aschraf</h4>
                <p className="time">22:20</p>
              </div>
              <div className="message_p">
                <p>Vous avez un contrôle demain</p>
                <b>1</b>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img src={bg} alt="background" className="cover" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4> Ruth Soumaoro</h4>
                <p className="time">22:20</p>
              </div>
              <div className="message_p">
                <p>tu me manques</p>
                <b>2</b>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img src={bg} alt="background" className="cover" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4> Michel Inapogui</h4>
                <p className="time">10:20</p>
              </div>
              <div className="message_p">
                <p>salut! moi c'est inapogui</p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img src={bg} alt="background" className="cover" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4> Aschraf</h4>
                <p className="time">22:20</p>
              </div>
              <div className="message_p">
                <p>Vous avez un contrôle demain</p>
                <b>1</b>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img src={bg} alt="background" className="cover" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4> Ruth Soumaoro</h4>
                <p className="time">22:20</p>
              </div>
              <div className="message_p">
                <p>tu me manques</p>
                <b>2</b>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img src={bg} alt="background" className="cover" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4> Michel Inapogui</h4>
                <p className="time">10:20</p>
              </div>
              <div className="message_p">
                <p>salut! moi c'est inapogui</p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="imgbx">
              <img src={bg} alt="background" className="cover" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4> Aschraf</h4>
                <p className="time">22:20</p>
              </div>
              <div className="message_p">
                <p>Vous avez un contrôle demain</p>
                <b>1</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="chat-part2">
        <div className="haut-text2">
          <div className="imgtext">
            <div className="userimg">
              <img src={bg} alt="background" className="cover" />
            </div>
            <h4>
              {" "}
              Ruth Soumaoro <br />
              <span>En line</span>
            </h4>
          </div>
          <div className="calls">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>

        <div className="conservation">
          <div className="talk-left talk">
            <p>
              je suis un developpeur, je maitrise le html css et le php <br />
              <span>10:20</span>
            </p>
          </div>
          <div className="talk-rigth talk">
            <p>
              je suis un developpeur, je maitrise le html css et le php <br />
              <span>10:22</span>
            </p>
          </div>
          <div className="talk-left talk">
            <p>
              je suis un developpeur, je maitrise le html css et le php <br />
              <span>10:20</span>
            </p>
          </div>
          <div className="talk-rigth talk">
            <p>
              je suis un developpeur, je maitrise le html css et le php <br />
              <span>10:22</span>
            </p>
          </div>
          <div className="talk-left talk">
            <p>
              je suis un developpeur, je maitrise le html css et le php <br />
              <span>10:20</span>
            </p>
          </div>
          <div className="talk-rigth talk">
            <p>
              je suis un developpeur, je maitrise le html css et le php <br />
              <span>10:22</span>
            </p>
          </div>
          <div className="talk-left talk">
            <p>
              je suis un developpeur, je maitrise le html css et le php <br />
              <span>10:20</span>
            </p>
          </div>
          <div className="talk-rigth talk">
            <p>
              je suis un developpeur, je maitrise le html css et le php <br />
              <span>10:22</span>
            </p>
          </div>
        </div>

        <form className="chat-form">
          <div className="container-input-stuffs">
            <div className="group-inp">
              <div class="icons">
                <i class="fa-regular fa-face-smile"></i>
                <i class="fa-solid fa-paperclip"></i>
              </div>
              <textarea
                placeholder="Enter your message here"
                minLength={1}
                maxLength={1500}
              ></textarea>
              <button className="submit">
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Conversation;
